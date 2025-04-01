PassMark BatteryMon V2.1
Copyright (R) 2001 - 2016 PassMark Software
All Rights Reserved
http://www.passmark.com

Overview
========
BatteryMon is an easy to use Windows based application
that allows users to monitor the performance of battery
systems being used to power portable computers and
compatible uninterruptible power supplies connected to
servers. The battery charge level is graphed in real
time, along with an extrapolated trend line and comparison
trend line. A log file is maintained of the battery
charge level and other statistics for later analysis.
<For more details see the online help>

Status
======
BatteryMon is free for personal use. 
Commercial use will require a licence, see the PassMark website
http://www.passmark.com/products/batmon.htm

Installation
============
1) Uninstall any previous version of BatteryMon
2) Double click (or Open) the downloaded ".exe" file
3) Follow the prompts


UnInstallation
==============
Use the Windows control panel, Add / Remove Programs


Requirements
============
Windows 2003, XP, Vista, 7, 8
16Meg RAM
1 Meg of free hard disk space 


Version History
===============
Here’s a summary of all the changes that have been made in
each version of BatteryMon.

25/03/2013 - Version 2.1 1008
- Removed licencing and release as free for personal use, 
  a company licence is required for commercial use

15/06/2012 - Version 2.1 1007
 - Added a "Send test email" button to the options
 - Changed the current capacity field in battery information to display units instead of mWh when appropriate
 - Fixed a bug where non-ascii characters could be saved to log as part of the unique ID

09/05/2012 - Version 2.1 1006
 - Fixed a bug where the logging could stop logging after 90 minutes

09/12/2011 - Version 2.1 1005
 - Fixed a precision bug when calculating the mAh of design, full charge and current capacity for the battery information window
 - Changed voltage display precision on battery information window to 3 decimal places 
 - Changed voltage output precision when logging to 3 decimal places 
 
04/09/2008 - Version 2.1 1004
 - Fixed some cases were it was possible to completely hide BatteryMon but it was still running.

01/07/2008 - Version 2.1 1003
 - Fixed a rare startup crash.

19/06/2008 - Version 2.1 1002
 - Fixed some stability issues.

06/06/2008 - Version 2.1 1001
 - Fixed a bug where there would be a corrupt line output to the log file every 1000th entry.

20/04/2007 - Version 2.1 1000
 - Windows Vista Support
 - Improved notification options/criteria
 - Added scroll bar to graph
 - Changed default location of the log file. Log file now resides in "My Documents\Passmark\BatteryMon\"
 - Added option to change location of log file
 - Added option to date stamp auto log files
 - Updated BatteryMon Logo

20/07/2006 - Version 2.0 1008
 - Fixed bug where system tray icon could remain stuck on full
 - Fixed bug where tooltip information for multiple batteries could be wrong in WindowsXP

14/06/2005 - Version 2.0 1007
 - Fixed bug where the last position of the mini window wasn't always saved
 - Fixed bug where in windows 98 another instance of the mini window could be started while it was already running and cause graphical corruption

22/04/2005 - Version 2.0 1006
 - Fixed bug where "Stop system from sleeping" was always on

4/04/2005 - Version 2.0 1005
 - Added option to run BatteryMon automatically at startup
 - Fixed bug where toolbar and buttons weren't displayed properly if a shortcut to the program was run with the "run" option set to "Minimized"

24/02/2005 - Version 2.0 1004 
- Added estimation of charge/discharge rate to graph and mini window if battery is not reporting a value
- Changed mini window to display overall time remaining rather than time per battery, this fixes a problem where the time would always be 0 if the battery isn’t reporting a value

20/01/2005 - Version 2.0 1003
 - Fixed bug where the chemistry type for some batteries wasn’t being detected properly
 - Fixed bug where very large values were being displayed in tool tips for time remaining and charge/discharge if they weren’t detected properly

17/1/2005 - Version 2.0 1002
 - Fixed bug with auto logging where the graph wasn't displayed properly 

14/1/2005 - Version 2.0 1001
 - Added right click menu to mini window
 - Added menu and toolbar, replacing some buttons on the interface
 - Fixed bug with auto logging
 - Battery charge indicator in battery information dialog changes colour to represent charging or discharging 
 - Added option to send email when battery charge falls to a certain level
 - Added a system tray icon 
 - Added right click menu for system tray icon
 - Added option to minimise to system tray
 - Added option to show/hide system tray icon
 - Added new security measures
 - Now also displays milliamp hours (mAh) for the design, full charge and current capacity in the battery information

12/01/2004 - Version 1.3 1003
- Added Configuration options "Start sampling when run" and "Start mini BatteryMon when run"

2/12/2003 - Version 1.3 1002
- Added ability for mini window to start at it's last screen location when run

1/12/2003 - Version 1.3 1001
- Fixed bug where logging could cause a crash on some laptops

26/11/2003 - Version 1.3 1000
- Added /r /m command line options
- Added mini window display
- Added configuration dialog
- Added option to play a sound when battery drops below a specified level
- Added System Information button and dialog
- Added header to log file containing battery information
- Fixed bug causing “Run time” to have an incorrect value when woken from Standby mode in Windows 2000

7/10/2003  - Version 1.2.1004
- Added the auto logging feature for unattended battery testing

13/03/2003  - Version 1.2.1003
- Fixed a windows handle leak when getting battery info from 
  slots without batteries.
- Fixed a few bugs in the multiple battery support area. 
  + Incorrect reporting of battery/slot information under certain
  conditions.
  + Incorrect reporting of discharge rate under certain conditions.

21/02/2003  - Version 1.2.1001
- Fixed overflow bug with charge/discharge information when 
  battery was charging rather than discharging.
- Changed 'Seconds Left' and 'Seconds Total' fields to
  'Time Remaining' and 'Total Time' HH:MM:SS format.

23/12/2002  - Version 1.2
- Fixed incorrect units for charge 'rate' in info window.
  Was mW/h but should have been mW.
- Added current capacity to the battery info window.
- Added current capacity, total capacity, capacity drop
  and charge rate display to the main window.

27/Oct/2001 - Version 1.1
-  Upgrade for Windows XP

13/Oct/2001 - Version 1.0.1001
- Bug fix that corrects graph position for displays
  running at greater than the standard 96dots per inch. 

19/Sept/2001 - Version 1.0.1000
- First release.

Documentation
=============
All the documentation is online. It can be accessed from
the help menu.


Support
=======
For technical support, questions, suggestions.
Visit our web page at
http://www.passmark.com


Ordering / Registration
=======================
All the details are in the online documentation
or you can visit our sales information page
http://www.passmark.com/sales

Enjoy..
The PassMark Development team
