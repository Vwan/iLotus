

(function (globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function (count) { return (count == 1) ? 0 : 1; };
  

  
  /* gettext library */

  django.catalog = {
    " downloads": " downloads", 
    "&hellip;and {0} more": [
      "&hellip;and {0} more", 
      "&hellip;and {0} more"
    ], 
    "<b>{0}</b> average in last {1} days": "<b>{0}</b> average in last {1} days", 
    "<b>{0}</b> character left.": [
      "<b>{0}</b> character left.", 
      "<b>{0}</b> characters left."
    ], 
    "<b>{0}</b> from {1} to {2}": "<b>{0}</b> from {1} to {2}", 
    "<b>{0}</b> in last {1} days": "<b>{0}</b> in last {1} days", 
    "Accept and Install": "Accept and Install", 
    "Add a comment": "Add a comment", 
    "Add to Favorites": "Add to Favorites", 
    "Add to favorites": "Add to favorites", 
    "Add to {0}": "Add to {0}", 
    "Add-on Status from {0} to {1}": "Add-on Status from {0} to {1}", 
    "Add-on Status, last {0} days": "Add-on Status, last {0} days", 
    "Add-on Versions from {0} to {1}": "Add-on Versions from {0} to {1}", 
    "Add-on Versions, last {0} days": "Add-on Versions, last {0} days", 
    "Add-on failed validation.": "Add-on failed validation.", 
    "Add-on has not been updated to support default-to-compatible.": "Add-on has not been updated to support default-to-compatible.", 
    "Add-on passed validation.": "Add-on passed validation.", 
    "Add-on submission checklist": "Add-on submission checklist", 
    "Add-ons Created": "Add-ons Created", 
    "Add-ons Created from {0} to {1}": "Add-ons Created from {0} to {1}", 
    "Add-ons Created, last {0} days": "Add-ons Created, last {0} days", 
    "Add-ons Downloaded": "Add-ons Downloaded", 
    "Add-ons Downloaded from {0} to {1}": "Add-ons Downloaded from {0} to {1}", 
    "Add-ons Downloaded, last {0} days": "Add-ons Downloaded, last {0} days", 
    "Add-ons Manager": "Add-ons Manager", 
    "Add-ons Manager Featured": "Add-ons Manager Featured", 
    "Add-ons Manager Learn More": "Add-ons Manager Learn More", 
    "Add-ons Manager Promo": "Add-ons Manager Promo", 
    "Add-ons Updated": "Add-ons Updated", 
    "Add-ons Updated from {0} to {1}": "Add-ons Updated from {0} to {1}", 
    "Add-ons Updated, last {0} days": "Add-ons Updated, last {0} days", 
    "Add-ons in Use": "Add-ons in Use", 
    "Add-ons in Use from {0} to {1}": "Add-ons in Use from {0} to {1}", 
    "Add-ons in Use, last {0} days": "Add-ons in Use, last {0} days", 
    "Added to Firefox": "Added to Firefox", 
    "Adding to Favorites&hellip;": "Adding to Favorites&hellip;", 
    "All Rights Reserved": "All Rights Reserved", 
    "All tests passed successfully.": "All tests passed successfully.", 
    "Amount, in USD": "Amount, in USD", 
    "An email address is required.": "An email address is required.", 
    "Android": "Android", 
    "Applications from {0} to {1}": "Applications from {0} to {1}", 
    "Applications, last {0} days": "Applications, last {0} days", 
    "Approved": "Approved", 
    "At least {0} character left.": [
      "At least {0} character left.", 
      "At least {0} characters left."
    ], 
    "Average Contribution": "Average Contribution", 
    "Average Reviews": "Average Reviews", 
    "Browse Listing Created Sort": "Browse Listing Created Sort", 
    "Browse Listing Featured Sort": "Browse Listing Featured Sort", 
    "Browse Listing Name Sort": "Browse Listing Name Sort", 
    "Browse Listing Popular Sort": "Browse Listing Popular Sort", 
    "Browse Listing Rating Sort": "Browse Listing Rating Sort", 
    "Browse Listing Up and Coming Sort": "Browse Listing Up and Coming Sort", 
    "Browse Listing Updated Sort": "Browse Listing Updated Sort", 
    "Browse Listing Users Sort": "Browse Listing Users Sort", 
    "Cancel": "Cancel", 
    "Category": "Category", 
    "Category Landing Featured Carousel": "Category Landing Featured Carousel", 
    "Category Landing Most Popular": "Category Landing Most Popular", 
    "Category Landing Recently Added": "Category Landing Recently Added", 
    "Category Landing Top Rated": "Category Landing Top Rated", 
    "Category Pages": "Category Pages", 
    "Changes Saved": "Changes Saved", 
    "Collections": "Collections", 
    "Collections Created": "Collections Created", 
    "Collections Created from {0} to {1}": "Collections Created from {0} to {1}", 
    "Collections Created, last {0} days": "Collections Created, last {0} days", 
    "Comment": "Comment", 
    "Compatibility Tests": "Compatibility Tests", 
    "Compiled binaries, as well as minified or obfuscated scripts (excluding known libraries) need to have their sources submitted separately for review. Make sure that you use the source code upload field to avoid having your submission rejected.": "Compiled binaries, as well as minified or obfuscated scripts (excluding known libraries) need to have their sources submitted separately for review. Make sure that you use the source code upload field to avoid having your submission rejected.", 
    "Contributions from {0} to {1}": "Contributions from {0} to {1}", 
    "Contributions, last {0} days": "Contributions, last {0} days", 
    "Creative Commons Attribution 3.0": "Creative Commons Attribution 3.0", 
    "Creative Commons Attribution-NoDerivs 3.0": "Creative Commons Attribution-NoDerivs 3.0", 
    "Creative Commons Attribution-NonCommercial 3.0": "Creative Commons Attribution-NonCommercial 3.0", 
    "Creative Commons Attribution-NonCommercial-NoDerivs 3.0": "Creative Commons Attribution-NonCommercial-NoDerivs 3.0", 
    "Creative Commons Attribution-NonCommercial-Share Alike 3.0": "Creative Commons Attribution-NonCommercial-Share Alike 3.0", 
    "Creative Commons Attribution-ShareAlike 3.0": "Creative Commons Attribution-ShareAlike 3.0", 
    "Daily Users": "Daily Users", 
    "Daily Users from {0} to {1}": "Daily Users from {0} to {1}", 
    "Daily Users, last {0} days": "Daily Users, last {0} days", 
    "Date": "Date", 
    "Dependencies": "Dependencies", 
    "Detail Page": "Detail Page", 
    "Detail Page (Development Channel)": "Detail Page (Development Channel)", 
    "Detail Page (bottom)": "Detail Page (bottom)", 
    "Details for {0}": "Details for {0}", 
    "Download Now": "Download Now", 
    "Download Sources from {0} to {1}": "Download Sources from {0} to {1}", 
    "Download Sources, last {0} days": "Download Sources, last {0} days", 
    "Download for {0} anyway": "Download for {0} anyway", 
    "Downloads": "Downloads", 
    "Downloads and Daily Users from {0} to {1}": "Downloads and Daily Users from {0} to {1}", 
    "Downloads and Daily Users, last {0} days": "Downloads and Daily Users, last {0} days", 
    "Downloads from {0} to {1}": "Downloads from {0} to {1}", 
    "Downloads, last {0} days": "Downloads, last {0} days", 
    "Duplicate": "Duplicate", 
    "Email author of {2} add-on which failed validation.": [
      "Email author of {2} add-on which failed validation.", 
      "Email authors of {2} add-ons which failed validation."
    ], 
    "Enter a new author's email address": "Enter a new author's email address", 
    "Error": "Error", 
    "Error with {0}": "Error with {0}", 
    "Experimental": "Experimental", 
    "Experimental <span>(Learn More)</span>": "Experimental <span>(Learn More)</span>", 
    "Fennec": "Fennec", 
    "Finished validating {0}": "Finished validating {0}", 
    "Firefox": "Firefox", 
    "Flagged": "Flagged", 
    "Flagged for review": "Flagged for review", 
    "Follow this Collection": "Follow this Collection", 
    "Following": "Following", 
    "Homepage Featured": "Homepage Featured", 
    "Homepage Most Popular": "Homepage Most Popular", 
    "Homepage Promo": "Homepage Promo", 
    "Homepage Up and Coming": "Homepage Up and Coming", 
    "If your add-on requires an account to a website in order to be fully tested, include a test username and password in the Notes to Reviewer (this can be done in the next step).": "If your add-on requires an account to a website in order to be fully tested, include a test username and password in the Notes to Reviewer (this can be done in the next step).", 
    "Image changes being processed": "Image changes being processed", 
    "Images must be either PNG or JPG.": "Images must be either PNG or JPG.", 
    "Include detailed version notes (this can be done in the next step).": "Include detailed version notes (this can be done in the next step).", 
    "Install for {0} anyway": "Install for {0} anyway", 
    "Installing...": "Installing...", 
    "Installs": "Installs", 
    "Installs and Daily Users from {0} to {1}": "Installs and Daily Users from {0} to {1}", 
    "Installs and Daily Users, last {0} days": "Installs and Daily Users, last {0} days", 
    "Installs from {0} to {1}": "Installs from {0} to {1}", 
    "Installs, last {0} days": "Installs, last {0} days", 
    "Internal server error": "Internal server error", 
    "Keep it": "Keep it", 
    "Languages from {0} to {1}": "Languages from {0} to {1}", 
    "Languages, last {0} days": "Languages, last {0} days", 
    "Learn more": "Learn more", 
    "Loading&hellip;": "Loading&hellip;", 
    "Loading...": "Loading...", 
    "Marked for deletion": "Marked for deletion", 
    "Meet the Developer": "Meet the Developer", 
    "More Info...": "More Info...", 
    "Mozilla": "Mozilla", 
    "Mozilla has marked this version as incompatible with your Firefox version.": "Mozilla has marked this version as incompatible with your Firefox version.", 
    "Must be a valid e-mail address.": "Must be a valid e-mail address.", 
    "No data available.": "No data available.", 
    "No results found": "No results found", 
    "No results found.": "No results found.", 
    "No version notes found": "No version notes found", 
    "Not Available for {0}": "Not Available for {0}", 
    "Not Updated for {0} {1}": "Not Updated for {0} {1}", 
    "Not available for your platform": "Not available for your platform", 
    "Not available for {0} {1}": "Not available for {0} {1}", 
    "Notes for Reviewers": "Notes for Reviewers", 
    "Number of Contributions": "Number of Contributions", 
    "Number of Reviews": "Number of Reviews", 
    "Often Used With": "Often Used With", 
    "Only available on Firefox Desktop": "Only available on Firefox Desktop", 
    "Only with Firefox \u2014 Get Firefox Now!": "Only with Firefox \u2014 Get Firefox Now!", 
    "Other": "Other", 
    "Others By Author": "Others By Author", 
    "Password strength:": "Password strength:", 
    "Pending": "Pending", 
    "Platforms from {0} to {1}": "Platforms from {0} to {1}", 
    "Platforms, last {0} days": "Platforms, last {0} days", 
    "Please verify the following points before finalizing your submission. This will minimize delays or misunderstanding during the review process:": "Please verify the following points before finalizing your submission. This will minimize delays or misunderstanding during the review process:", 
    "Porting a legacy Firefox add-on on MDN": "Porting a legacy Firefox add-on on MDN", 
    "Ratings": "Ratings", 
    "Ratings from {0} to {1}": "Ratings from {0} to {1}", 
    "Ratings, last {0} days": "Ratings, last {0} days", 
    "Receipt checked by app.": "Receipt checked by app.", 
    "Receipt was not checked by app.": "Receipt was not checked by app.", 
    "Received an empty response from the server; status: {0}": "Received an empty response from the server; status: {0}", 
    "Rejected": "Rejected", 
    "Remove": "Remove", 
    "Remove from Favorites": "Remove from Favorites", 
    "Remove from favorites": "Remove from favorites", 
    "Remove this add-on from the collection": "Remove this add-on from the collection", 
    "Remove this localization": "Remove this localization", 
    "Remove this user as a contributor": "Remove this user as a contributor", 
    "Removing Favorite&hellip;": "Removing Favorite&hellip;", 
    "Requested Info": "Requested Info", 
    "Requires Newer Version of {0}": "Requires Newer Version of {0}", 
    "Review Text": "Review Text", 
    "Review notes found": "Review notes found", 
    "Reviewer": "Reviewer", 
    "Reviews Written": "Reviews Written", 
    "Reviews Written from {0} to {1}": "Reviews Written from {0} to {1}", 
    "Reviews Written, last {0} days": "Reviews Written, last {0} days", 
    "Sales": "Sales", 
    "Sales from {0} to {1}": "Sales from {0} to {1}", 
    "Sales, last {0} days": "Sales, last {0} days", 
    "SeaMonkey": "SeaMonkey", 
    "Search Results": "Search Results", 
    "Search Suggestions": "Search Suggestions", 
    "Search add-ons for <b>{0}</b>": "Search add-ons for <b>{0}</b>", 
    "Search apps for <b>{0}</b>": "Search apps for <b>{0}</b>", 
    "Search themes for <b>{0}</b>": "Search themes for <b>{0}</b>", 
    "See full validation report": "See full validation report", 
    "Select a file...": "Select a file...", 
    "Select an application first": "Select an application first", 
    "Sharing": "Sharing", 
    "Site Metrics from {0} to {1}": "Site Metrics from {0} to {1}", 
    "Site Metrics, last {0} days": "Site Metrics, last {0} days", 
    "Sorry, no supported platform has been found.": "Sorry, no supported platform has been found.", 
    "Sorry, you need a Mozilla-based browser (such as Firefox) to install a search plugin.": "Sorry, you need a Mozilla-based browser (such as Firefox) to install a search plugin.", 
    "Status": "Status", 
    "Stop Following": "Stop Following", 
    "Stop following": "Stop following", 
    "Subscribers": "Subscribers", 
    "Subscribers from {0} to {1}": "Subscribers from {0} to {1}", 
    "Subscribers, last {0} days": "Subscribers, last {0} days", 
    "Sunbird": "Sunbird", 
    "Tests": "Tests", 
    "The filetype you uploaded isn't recognized.": "The filetype you uploaded isn't recognized.", 
    "The validation process found these issues that can lead to rejections:": "The validation process found these issues that can lead to rejections:", 
    "Theme": "Theme", 
    "Themes Require Newer Version of {0}": "Themes Require Newer Version of {0}", 
    "Themes Require {0}": "Themes Require {0}", 
    "There was a problem contacting the server.": "There was a problem contacting the server.", 
    "There was an error uploading your file.": "There was an error uploading your file.", 
    "These tests were not run.": "These tests were not run.", 
    "This add-on has been preliminarily reviewed by Mozilla.": "This add-on has been preliminarily reviewed by Mozilla.", 
    "This feature is temporarily disabled while we perform website maintenance. Please check back a little later.": "This feature is temporarily disabled while we perform website maintenance. Please check back a little later.", 
    "This theme is incompatible with your version of {0}": "This theme is incompatible with your version of {0}", 
    "Thunderbird": "Thunderbird", 
    "Total Amount Contributed": "Total Amount Contributed", 
    "Unexpected server error while validating.": "Unexpected server error while validating.", 
    "Unknown": "Unknown", 
    "Unreviewed": "Unreviewed", 
    "Updating results&hellip;": "Updating results&hellip;", 
    "Uploading {0}": "Uploading {0}", 
    "Upsell": "Upsell", 
    "Usage": "Usage", 
    "User Profile": "User Profile", 
    "User Signups": "User Signups", 
    "User Signups from {0} to {1}": "User Signups from {0} to {1}", 
    "User Signups, last {0} days": "User Signups, last {0} days", 
    "Validating {0}": "Validating {0}", 
    "Validation task could not complete or completed with errors": "Validation task could not complete or completed with errors", 
    "Version History": "Version History", 
    "Version Notes": "Version Notes", 
    "Videos must be in WebM.": "Videos must be in WebM.", 
    "View other versions": "View other versions", 
    "Warning": "Warning", 
    "We allow and encourage an upgrade but you cannot reverse this process. Once your users have the WebExtension installed, they will not be able to install a legacy add-on.": "We allow and encourage an upgrade but you cannot reverse this process. Once your users have the WebExtension installed, they will not be able to install a legacy add-on.", 
    "We have enabled a new linter to process your Add-on. Please make sure to report any issues on GitHub": "We have enabled a new linter to process your Add-on. Please make sure to report any issues on GitHub", 
    "WebExtension upgrade": "WebExtension upgrade", 
    "Week of {0}": "Week of {0}", 
    "Works with {app} {min} - {max}": "Works with {app} {min} - {max}", 
    "You cancelled the upload.": "You cancelled the upload.", 
    "You cannot add yourself as a contributor.": "You cannot add yourself as a contributor.", 
    "You have already added that user.": "You have already added that user.", 
    "You need to be using Firefox 10.0 or higher.": "You need to be using Firefox 10.0 or higher.", 
    "You're trying it on!": "You're trying it on!", 
    "Your Theme's Name": "Your Theme's Name", 
    "Your add-on failed validation with {0} error.": [
      "Your add-on failed validation with {0} error.", 
      "Your add-on failed validation with {0} errors."
    ], 
    "Your add-on validation timed out, it will be manually reviewed.": "Your add-on validation timed out, it will be manually reviewed.", 
    "Your add-on was validated with no errors and {0} message.": [
      "Your add-on was validated with no errors and {0} message.", 
      "Your add-on was validated with no errors and {0} messages."
    ], 
    "Your add-on was validated with no errors and {0} warning.": [
      "Your add-on was validated with no errors and {0} warning.", 
      "Your add-on was validated with no errors and {0} warnings."
    ], 
    "Your add-on was validated with no errors or warnings.": "Your add-on was validated with no errors or warnings.", 
    "Your browser does not support the video tag": "Your browser does not support the video tag", 
    "Your input is required": "Your input is required", 
    "Your submission will be automatically signed.": "Your submission will be automatically signed.", 
    "{0} add-ons": "{0} add-ons", 
    "{0} collections": "{0} collections", 
    "{0} error": [
      "{0} error", 
      "{0} errors"
    ], 
    "{0} installs": "{0} installs", 
    "{0} line {1} column {2}": "{0} line {1} column {2}", 
    "{0} notice": [
      "{0} notice", 
      "{0} notices"
    ], 
    "{0} of {1}": "{0} of {1}", 
    "{0} refunds": "{0} refunds", 
    "{0} reviews": "{0} reviews", 
    "{0} sales": "{0} sales", 
    "{0} star": [
      "{0} star", 
      "{0} stars"
    ], 
    "{0} users": "{0} users", 
    "{0} warning": [
      "{0} warning", 
      "{0} warnings"
    ], 
    "{0}% complete": "{0}% complete", 
    "{files} file": [
      "{files} file", 
      "{files} files"
    ], 
    "{name} was viewing this add-on first.": "{name} was viewing this add-on first.", 
    "{name} was viewing this page first.": "{name} was viewing this page first.", 
    "{reviews} user review": [
      "{reviews} user review", 
      "{reviews} user reviews"
    ]
  };

  django.gettext = function (msgid) {
    var value = django.catalog[msgid];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return (typeof(value) == 'string') ? value : value[0];
    }
  };

  django.ngettext = function (singular, plural, count) {
    var value = django.catalog[singular];
    if (typeof(value) == 'undefined') {
      return (count == 1) ? singular : plural;
    } else {
      return value[django.pluralidx(count)];
    }
  };

  django.gettext_noop = function (msgid) { return msgid; };

  django.pgettext = function (context, msgid) {
    var value = django.gettext(context + '\x04' + msgid);
    if (value.indexOf('\x04') != -1) {
      value = msgid;
    }
    return value;
  };

  django.npgettext = function (context, singular, plural, count) {
    var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
    if (value.indexOf('\x04') != -1) {
      value = django.ngettext(singular, plural, count);
    }
    return value;
  };
  

  django.interpolate = function (fmt, obj, named) {
    if (named) {
      return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
    } else {
      return fmt.replace(/%s/g, function(match){return String(obj.shift())});
    }
  };


  /* formatting library */

  django.formats = {
    "DATETIME_FORMAT": "N j, Y, P", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%m/%d/%Y %H:%M:%S", 
      "%m/%d/%Y %H:%M:%S.%f", 
      "%m/%d/%Y %H:%M", 
      "%m/%d/%Y", 
      "%m/%d/%y %H:%M:%S", 
      "%m/%d/%y %H:%M:%S.%f", 
      "%m/%d/%y %H:%M", 
      "%m/%d/%y"
    ], 
    "DATE_FORMAT": "N j, Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%b %d %Y", 
      "%b %d, %Y", 
      "%d %b %Y", 
      "%d %b, %Y", 
      "%B %d %Y", 
      "%B %d, %Y", 
      "%d %B %Y", 
      "%d %B, %Y"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "F j", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "m/d/Y", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "P", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

  django.get_format = function (format_type) {
    var value = django.formats[format_type];
    if (typeof(value) == 'undefined') {
      return format_type;
    } else {
      return value;
    }
  };

  /* add to global namespace */
  globals.pluralidx = django.pluralidx;
  globals.gettext = django.gettext;
  globals.ngettext = django.ngettext;
  globals.gettext_noop = django.gettext_noop;
  globals.pgettext = django.pgettext;
  globals.npgettext = django.npgettext;
  globals.interpolate = django.interpolate;
  globals.get_format = django.get_format;

}(this));

