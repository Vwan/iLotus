# Jenkins: Groovy 

## 背景：

我们的 Automation 测试脚本需要在10个不同语言的机器上跑，本地化测试产品。
我们用Jenkins启动测试执行，需要同时向1-10个机器发送文件和脚本运行命令，现有Jenkins的配置采用master/slave 机制如下：

**Dispatcher Job**:

1. 启用参数化，每个语言机器传递两个参数:

	- Choice Parameter: slave Node 名，比如这里的NodeLabel1,表示第一台目标机器

	![Node Name](http://i.imgur.com/MU2lfKi.png)
	- File Parameter: 要发送给目标机器的文件

	![File Name](http://i.imgur.com/eEUbWOY.png)

2.	在Build Steps中trigger seed job:

	![](http://i.imgur.com/yu37Pt1.png)

**Seed Job**: 设置具体的运行脚本。

## 现有设计的问题：

运行很流畅，但是维护不方便

- 每个Slave Node都添加一个Choice Paramter 和 File Parameter，
- Build Step中也要添加10次trigger seed job,
- Steps中如有一处脚本改动，需重复改动10次
- 如果有新添加测试机器，需要在Parameters中手动添加新Node, 在Steps中也要添加。

## 改进需求：

自动获取所有Node列表，减少不必要的手动增添Node。

在Build Steps中，通过脚本trigger seed job,这样避免重复设置10次trigger step, 提高可重复性(Reusability)。

## 改进方案：

使用Groovy脚本，安装Jenkins插件：

- [Active Choices](https://wiki.jenkins-ci.org/display/JENKINS/Active+Choices+Plugin): 一个蛮好的参数化插件，可插入Groovy脚本和文件（集成Scriptlet插件）。
		
- [Scriptler](http://wiki.jenkins-ci.org/display/JENKINS/Scriptler+Plugin)：Groovy脚本插件，可以集中管理脚本文件。

- [Job-DSL](https://wiki.jenkins-ci.org/display/JENKINS/Job+DSL+Plugin): 一个很好的利用DSL设置和运行Job的插件。

## 具体实施：

1. 在Jenkins->Scriptler中创建getAllNodeByProject.groovy文件，用来获取所有的Node机器。需要的话也可以加入一些筛选条件，比如在线与否。

scriptler中支持参数传递，这里的project就是预先设置的参数，可在job调用该脚本时进行设置。

```

	def list = jenkins.model.Jenkins.instance.slaves.findAll{
	  if (it.name.contains(project)) it.name
	}.collect{it.name}
	list.add(0,"None")
	return list
```

![](http://i.imgur.com/bnp7n0G.png)

2. Build step中插入Job-DSL step, 可插入groovy 脚本或文件。可惜job-dsl与scriptler没有集成，所以这里先直接在Job中写脚本了。


```

		import hudson.model.*
		def lang = "CHS"
	  	def nodeName="Node_"+lang
	    def jobName = 'GUI_REG_Seed'
		// trigger seed job on specified nodeName
		runJob(nodeName,jobName)

		// define a method to trigger job
		def runJob(nodeName,jobName){
		        def build = Thread.currentThread()?.executable
				// get the selected node parameter value at runtime
		        def node = build?.actions.find { it instanceof ParametersAction }?.parameters.find {
		            it.name == nodeName
		        }
	     	 println "Node is $node"
	     	   if (node != 'None') {
	            // trigger seed job
	            println "Triggering seed job..."

				// define a seed job with runtime node passed.
	            def seedJob = job(jobName) {
	                parameters {
	                    nodeParam(nodeName) {
	                      description('Select Test Node')
	                      defaultNodes([node.toString()])
	                      allowedNodes([node.toString()])
	                    }                   
	                }
	              steps {
	      			  batchFile('echo Hello World!')
	            }
	            }
	          // run see job
	          println "running REG seed job on Node: "+nodeName
	           queue(seedJob) 
	        }
	    }

```
