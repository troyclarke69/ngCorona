# ngCorona

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

# Deployment on netlify:
    * rename or delete existing /dist folder (if necessary)
    ng build --prod
    Creates deployment files in /dist folder

# GoogleChartModule Setup/Developmen:
# Reference: https://blog.jscrambler.com/creating-a-sales-dashboard-using-angular-and-google-charts/

# Add Google charts reference to project:
    a. Add line to index.html: <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    b. OR download loader.js to /assets folder and add path to <scripts> section in angular.json file.

# Create Google Charts Service module:
    ng g module google-chart

# Create another module inside google-chart folder (creates another subfolder):
    ng g module google-chart/service

# Create service inside service module/folder
    ng g service google-chart/service/google-chart

    * Note: this file - google-chart.service.ts contains the var 'google' - refers to google charts lib.

# Ensure that the service module is imported in google-chart.module.ts (not mentioned in article)
    ...
    imports: [
        CommonModule,
        ServiceModule 
    ]
    ...

    * Note: 'import { ServiceModule } from './service/service.module';'

# Create Line chart component inside google-chart folder
    ng g component google-chart/line-chart

# Add '<div id="divLineChart'></div>' to line-chart.component.html file

# Ensure that google-chart.module.ts file exports line chart component
    ...
    exports: [LineChartComponent],
    ...

# Modify app.component.html to include chart component
    <app-line-chart></app-line-chart>

# VERY IMPORTANT (Not mentioned in orig. article)!!!!!!
    Must add GoogleChartModule to app.module.ts

    ...
    import { GoogleChartModule } from './google-chart/google-chart.module'
    ...
    imports: [
        BrowserModule,
        AppRoutingModule,
        GoogleChartModule
    ],
    ...

# Running app should show 'canned' (static) report

