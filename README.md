Kendo UI Professional Mobile App with Data Visualization
===
<a href="https://platform.telerik.com/#appbuilder/clone/https%3A%2F%2Fgithub.com%2FIcenium%2Fsample-kendo-ui-professional" target="_blank"><img src="http://docs.telerik.com/platform/appbuilder/sample-apps/images/try-in-appbuilder.png" alt="Try in AppBuilder" title="Try in AppBuilder" /></a> <a href="https://github.com/Icenium/sample-kendo-ui-professional" target="_blank"><img style="padding-left:20px" src="http://docs.telerik.com/platform/appbuilder/sample-apps/images/get-github.png" alt="Get from GitHub" title="Get from GitHub"></a>

<a id="top"></a>
* [Overview](#overview)
* [Showcased APIs](#showcased-apis)
* [Important Directories and Files](#important-directories-and-files)
* [Screenshots](#screenshots)
* [Test the Sample](#test-the-sample)
* [Limitations](#limitations)

# Overview

This demo app is a hybrid mobile app with rich HTML5-based data visualization, developed with Kendo UI Professional. It provides a pie chart, a stock chart, a gauge and a QR code generator.

> *Supported mobile platforms:* iOS, Android, Windows Phone
>
> *Developed with:* Apache Cordova 3.7.0

[Back to Top](#top)

# Showcased APIs

This sample shows you how to use the following widgets and features of Kendo UI Professional.

* **[Application][Application]**: The widget provides the necessary tools for building native-looking web based mobile applications.
* **[RadialGauge][RadialGauge]**: The widget lets you quickly determine where a value lies in a range. Kendo UI draws the gauge using SVG.
* **[Chart][Chart]**: The widget draws high quality charts of the following types: bar, column, line, area, bullet, pie, donut, scatter, bubble, radar, and polar. Kendo UI draws the chart using SVG.
* **[QRCode][QRCode]**: The widget generates canvas or SVG images that represent QR codes. Kendo UI draws the QR code using SVG.
* **[StockChart][StockChart]**: The widgets lets you visualize stock prices and related graphs. Kendo UI draws the QR code using SVG.
* **[DataSource][DataSource]:** The DataSource component is an abstraction for using local data (array of JavaScript objects) or remote data (web service returning JSON, JSONP, OData or XML). 

For more information about the Kendo UI Professional widget APIs, see the [Kendo UI API Reference][Kendo UI API Reference]. 

This sample shows you how to use the following Apache Cordova core plugin.

* **[Splashscreen][Splashscreen]:** The plugin shows or hides the splash screen when the app launches.

[Back to Top](#top)

# Important Directories and Files

* `data\boeing-stock.json`: Contains dummy data for the stock chart.
* `scripts\app.js`: Contains the application initialization and the implementation of switching between the native and the flat UI skins.
* `scripts\gauge.js`: Contains the implementation of the gauge.
* `scripts\pie-chart.js`: Contains the implementation of the pie chart.
* `scripts\qr-code.js`: Contains the implementation of the QR code generator.
* `scripts\stock-chart.js`: Contains the implementation of the stock chart.

[Back to Top](#top)

# Screenshots

### iOS

Skin | Pie Chart | Radial Gauge | QR Code | Stock Chart
--- | --- | --- | --- | ---
Native | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/ios/native_pie_chart.jpg) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/ios/native_radial_gauge.jpg) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/ios/native_qr_code.jpg) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/ios/native_stock_chart.jpg)
Flat | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/ios/flat_pie_chart.jpg) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/ios/flat_radial_gauge.jpg) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/ios/flat_qr_code.jpg) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/ios/flat_stock_chart.jpg)

### Android

Skin | Pie Chart | Radial Gauge | QR Code | Stock Chart
--- | --- | --- | --- | ---
Native | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/android/native-pie-chart.png) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/android/native-gauge.png) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/android/native-qr-code.png) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/android/native-stock-chart.png)
Flat | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/android/flat-pie-chart.png) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/android/flat-gauge.png) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/android/flat-qr-code.png) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/android/flat-stock-chart.png)

### Windows Phone

Skin | Pie Chart | Radial Gauge | QR Code | Stock Chart
--- | --- | --- | --- | ---
Native | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/wp/native-pie-chart.png) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/wp/native-gauge.png) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/wp/native-qr-code.png) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/wp/native-stock-chart.png)
Flat | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/wp/flat-pie-chart.png) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/wp/flat-gauge.png) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/wp/flat-qr-code.png) | ![](https://github.com/Icenium/sample-kendo-ui-professional/blob/master/screenshots/wp/flat-stock-chart.png)

[Back to Top](#top)

# Test the Sample

Apart from exploring the sample code base in GitHub, you can also clone and run the sample in your preferred AppBuilder client.

## In-Browser

With the AppBuilder in-browser client, you can develop hybrid and NativeScript cross-platform mobile apps from your browser. You can use the in-browser client at [https://platform.telerik.com](https://platform.telerik.com).

### Clone the sample

1. Click **Try in AppBuilder** above.
1. Provide your login credentials, if prompted.

### Configure the sample for running

1. In the **Project Navigator**, right-click the project node and select **Manage Packages**.
1. In the **Kendo UI** tab, select a **Kendo UI Professional** package and click **Install*.
1. Confirm and wait for the operation to complete.
1. Click **Close**.

### Run the sample

1. [Run in the device simulator.][device simulator]
1. [Run in the companion app.][companion]
1. [Deploy on device via QR code.][QR code]

[Back to Top](#top)

## Windows

With the AppBuilder Windows client, you can develop hybrid and NativeScript cross-platform mobile apps from your Windows desktop. You can download and install the Windows client from [http://www.telerik.com/appbuilder/windows-client](http://www.telerik.com/appbuilder/windows-client).

### Clone the sample

1. Verify that the AppBuilder Windows client is running and you are logged in the Telerik Platform in the account in which you want to develop your application.
1. In the dashboard, click **Samples** and select **Hybrid**.
1. From the **Workspace** drop-down menu, select the workspace in which you want to develop your application.
1. Select **Demos**.
1. Select **Kendo Ui Professional**.
1. (Optional) Rename the project.
1. Click **Clone**.

### Configure the sample for running

1. In the **Project Navigator**, right-click the project node and select **Manage Packages**.
1. In the **Kendo UI** tab, select a **Kendo UI Professional** package and click **Install*.
1. Confirm and wait for the operation to complete.
1. Click **Close**.

### Run the sample

With the AppBuilder Windows client, you can quickly test your apps on device, in the simulator or in the native emulators.

1. [Run in the device simulator.][device simulator]
1. [Run in the companion app.][companion]
1. [Run in the native emulators.][emulators]
1. [Deploy on device via QR code.][QR code]
1. [Deploy via cable connection.][USB deploy]

[Back to Top](#top)

## Visual Studio

With the AppBuilder extension for Visual Studio, you can develop hybrid and NativeScript cross-platform mobile apps from Microsoft Visual Studio. You can download and install the extension from [http://www.telerik.com/appbuilder/visual-studio-extension](http://www.telerik.com/appbuilder/visual-studio-extension).

### Clone the sample

1. Verify that the AppBuilder extension for Visual Studio is running and you are logged in the Telerik Platform in the account in which you want to develop your application.
1. Select **AppBuilder** &#8594; **Get Sample**.
1. Select **Hybrid**.
1. Select **Demos**.
1. Select **Kendo Ui Core Professional**.
1. (Optional) Rename the project.
1. Click **Get**.

### Configure the sample for running

1. In the **Solution Explorer**, right-click the project node and select **Manage Packages**.
1. In the **Kendo UI** tab, select a **Kendo UI Professional** package and click **Install*.
1. Confirm and wait for the operation to complete.
1. Click **Close**.

### Run the sample

With the AppBuilder extension for Visual Studio, you can quickly test your apps on device, in the simulator or in the native emulators.

1. [Run in the device simulator.][device simulator]
1. [Run in the companion app.][companion]
1. [Run in the native emulators.][emulators]
1. [Deploy on device via QR code.][QR code]
1. [Deploy via cable connection.][USB deploy]

[Back to Top](#top)

## CLI

With the AppBuilder command-line interface, you can develop hybrid and NativeScript cross-platform mobile apps from the command line. You can learn how to add the AppBuilder commands to your command line from [http://www.telerik.com/appbuilder/command-line-interface](http://www.telerik.com/appbuilder/command-line-interface).

### Clone the sample

1. Verify that a command prompt is running and you are logged in the Telerik Platform in the account in which you want to develop your application.
1. To list the available samples, run the following command.

	```bash
	appbuilder sample
	```
1. Run the clone command for the sample as listed by `appbuilder sample`.
	
	```bash
	appbuilder sample clone kendo-ui-professional
	```

The AppBuilder command-line interface shows the following message: `Successfully initialized project in the folder!`

### Configure the sample for running

1. In the command line, navigate to your project.
1. Run the following command.

	```bash
	appbuilder update-kendoui
	```
1. Type the ID of the Kendo UI Professional package that you want to install and press `Enter`.
1. Confirm and wait for the operation to complete.

### Run the sample

With the AppBuilder command-line interface, you can quickly test your apps on device, in the simulator or in the native emulators.

1. [Run in the device simulator.][device simulator]
1. [Run in the companion app.][companion]
1. [Run in the native emulators.][emulators]
1. [Deploy on device via QR code.][QR code]
1. [Deploy via cable connection.][USB deploy]

[Back to Top](#top)

# Limitations

This demo app does not include Kendo UI Professional. You need to manually include it in your project. For more information, see the **Configure the sample app** section for your AppBuilder client above.

[Back to Top](#top)

[device simulator]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-apps-in-simulator/launch-simulator
[companion]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/run-companion/using-appbuilder-companion-app
[QR code]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/deploy-remote
[USB deploy]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/running-on-connected-devices/deploy-connected
[emulators]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-in-emulators/native-emulators
[Kendo UI API Reference]: http://docs.telerik.com/kendo-ui/api/introduction
[Application]: http://docs.telerik.com/kendo-ui/mobile/application
[RadialGauge]: http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/radialgauge
[Chart]: http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart
[QRCode]: http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/qrcode
[StockChart]: http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart
[DataSource]: http://docs.telerik.com/kendo-ui/framework/datasource/overview
[Splashscreen]: https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md