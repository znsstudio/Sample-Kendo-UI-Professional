Kendo UI Professional Mobile App with Data Visualization<br/>(formerly the Kendo UI DataViz app template)
===========================================
<a href="https://platform.telerik.com/#appbuilder/clone/https%3A%2F%2Fgithub.com%2FIcenium%2Fsample-kendo-ui-professional" target="_blank"><img src="http://docs.telerik.com/platform/appbuilder/sample-apps/images/try-in-appbuilder.png" alt="Try in AppBuilder" title="Try in AppBuilder" /></a>

This sample (formerly the Kendo UI DataViz app template) shows how to use Telerik AppBuilder and the mobile and data visualization widgets of Kendo UI Professional to develop a hybrid mobile app with rich HTML5-based data visualization. The app provides a pie chart, a stock chart, a gauge and a QR code generator.

## Telerik AppBuilder and Kendo UI Professional

> **IMPORTANT:** Telerik AppBuilder does not provide Kendo UI Professional with this sample. You need to manually include it in your project. For more information, see [Running the Sample].<br/>If you decide to add Kendo UI Professional to your project via the built-in package manager, keep in mind that Telerik AppBuilder provides a customized Kendo UI Professional package. The customized package contains widgets and framework features for mobile development and rich data visualization.

AppBuilder™ is an Integrated Cloud Environment (ICE) that eliminates the complexity associated with cross-platform mobile development. By combining the convenience of a local development environment with the power and flexibility of the cloud, AppBuilder lets you build hybrid mobile apps for multiple mobile platforms. For more information, see the [Telerik AppBuilder web page].

Kendo UI is a UI framework that provides everything you need to build sites and apps with pure JavaScript and HTML5. Kendo UI Professional is a Kendo UI suite that provides over 70 widgets and framework features to let you create apps with rich data visualization. For more information, see the [Kendo UI web page].

## Sample Overview

This sample shows you how to implement a native-looking user interface along with the unique Flat UI. The app provides a pie chart, stock chart, gauge, and a QR code generator. This sample was formerly available as the **Kendo UI DataViz** and the **Kendo UI mobile app with data visualization** templates in AppBuilder.

This sample shows how to use the following widgets and features of Kendo UI Professional:

* **[Application]**: The widget provides the necessary tools for building native-looking web based mobile applications.
* **[RadialGauge]**: The widget lets you quickly determine where a value lies in a range. Kendo UI draws the gauge using SVG.
* **[Chart]**: The widget draws high quality charts of the following types: bar, column, line, area, bullet, pie, donut, scatter, bubble, radar, and polar. Kendo UI draws the chart using SVG.
* **[QRCode]**: The widget generates canvas or SVG images that represent QR codes. Kendo UI draws the QR code using SVG.
* **[StockChart]**: The widgets lets you visualize stock prices and related graphs. Kendo UI draws the QR code using SVG.
* **[DataSource]:** The DataSource component is an abstraction for using local data (array of JavaScript objects) or remote data (web service returning JSON, JSONP, OData or XML). 

For more information about the Kendo UI Professional widget APIs, see the [Kendo UI API Reference]. 

This sample shows how to use the following Apache Cordova core plugins:

* **[Splashscreen]:** The plugin shows or hiders the splashscreen when the app launches.

## Cloning the Sample

You can clone this sample in Telerik AppBuilder, explore and modify the code, and build and run it on Android, iOS and Windows Phone 8 devices.

### Clone the sample app in the AppBuilder in-browser client

1. In your browser, verify that you are logged in the Telerik Platform and you have switched to the account in which you want to develop your application.
1. In the account dashboard, click the workspace in which you want to develop your application.
1. Click **Create project**.
1. Select **AppBuilder Hybrid project**.
1. Select **Start from sample project**.
1. Select **Demo Applications**.
1. Select **Kendo ui professional**.
1. (Optional) Rename the project.
1. (Optional) Update the description.
1. Click **Create Project**.

### Clone a sample app in the AppBuilder Windows client

1. Verify that the AppBuilder Windows client is running and you are logged in the Telerik Platform in the account in which you want to develop your application.
1. In the dashboard, click **Samples** and select **Hybrid**.
1. From the **Workspace** drop-down menu, select the workspace in which you want to develop your application.
1. Select **Demos**.
1. Select **Kendo Ui Professional**.
1. (Optional) Rename the project.
1. Click **Clone**.

### Clone a sample app in the AppBuilder extension for Visual Studio

1. Select **AppBuilder** &#8594; **Get Sample**.
1. Select **Hybrid**.
1. Select **Demos**.
1. Select **Kendo Ui Core Professional**.
1. (Optional) Rename the project.
1. Click **Get**.

The extension for Visual Studio copies the sample files locally. The extension creates a new solution and project and loads them.

### Clone a sample app in the AppBuilder command-line interface

1. To list the available samples, run the following command.

	```bash
	appbuilder sample
	```
1. Run the clone command for the sample as listed by `appbuilder sample`.
	
	```bash
	appbuilder sample clone kendo-ui-professional
	```

The AppBuilder command-line interface shows the following message: `Successfully initialized project in the folder!`

## Running the Sample

With Telerik AppBuilder, you can deploy apps in the device simulator and on device wirelessly or via cable connection. For more information about running apps, see [Running Your App].

> **IMPORTANT:** Telerik AppBuilder does not provide Kendo UI Professional with this sample. You need to manually include it in your project.<br/>Telerik AppBuilder provides a customized Kendo UI Professional package. The customized package contains widgets and framework features for mobile development and rich data visualization. Before you attempt to add Kendo UI Professional to your project, make sure that your subscription plan provides Kendo UI Professional.

### Install Kendo UI Professional from the AppBuilder in-browser client

1. Clone the sample in the client.
1. In the **Project Navigator**, right-click the project node and select **Manage Packages**.
1. In the **Kendo UI** tab, select a **Kendo UI Professional** package and click **Install*.
1. Confirm and wait for the operation to complete.
1. Click **Close**.
1. Run the app in the device simulator or on device.<br/>For more information about running apps, see [Running Your App].

### Install Kendo UI Professional from the AppBuilder Windows client

1. Clone the sample in the client.
1. In the **Project Navigator**, right-click the project node and select **Manage Packages**.
1. In the **Kendo UI** tab, select a **Kendo UI Professional** package and click **Install*.
1. Confirm and wait for the operation to complete.
1. Click **Close**.
1. Run the app in the device simulator or on device.<br/>For more information about running apps, see [Running Your App].

### Install Kendo UI Professional from the AppBuilder extension for Visual Studio

1. Clone the sample in the client.
1. In the **Solution Explorer**, right-click the project node and select **Manage Packages**.
1. In the **Kendo UI** tab, select a **Kendo UI Professional** package and click **Install*.
1. Confirm and wait for the operation to complete.
1. Click **Close**.
1. Run the app in the device simulator or on device.<br/>For more information about running apps, see [Running Your App].

### Install Kendo UI Professional from the AppBuilder command-line interface

1. Clone the sample in the client.
1. In the command line, navigate to your project.
1. Run the following command.

	```bash
	appbuilder update-kendoui
	```
1. Type the ID of the Kendo UI Professional package that you want to install and press `Enter`.
1. Confirm and wait for the operation to complete.

## License

This sample is licensed under the Apache License, Version 2.0. For more information, see [License].

[Running the Sample]: #running-the-sample
[Telerik AppBuilder web page]: http://www.telerik.com/appbuilder
[License]: License.md
[Kendo UI web page]: http://www.telerik.com/kendo-ui
[Kendo UI API Reference]: http://docs.telerik.com/kendo-ui/api/introduction
[Running Your App]: http://docs.telerik.com/platform/appbuilder/testing-your-app/run-your-app
[Application]: http://docs.telerik.com/kendo-ui/mobile/application
[RadialGauge]: http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/radialgauge
[Chart]: http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart
[QRCode]: http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/qrcode
[StockChart]: http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/stock-chart
[DataSource]: http://docs.telerik.com/kendo-ui/framework/datasource/overview
[Splashscreen]: https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md
