=== DESCRIPTION ===
This product consists of three parts in addition to the csv data file
- product_structure.html : Describes the overall structure of the web page.
- product_style.css : Contains the styling of the items defined in the product_structure.
- product_visualization.js : Imports the necessary data from the csv file and plot the main charts. Apexcharts is the main libary to render the line chart and column chart. 
- apple_bert_lstm.csv : Feed the required data to product_visualization.js file for visualization.


=== INSTALLATION ===
The user can download above 4 files mentioned from the description.
Then the user can run the python flask server from the root directory.
Finally the user can navigate to the local server.
The user might need to install the necessary versions of Apexcharts or d3.js library depending on the local environment.


=== EXECUTION ===
The user should be able to successfully run our product if all the installation process went well.
The user can hover over the line chart or column chart where the tool tip will appear.
The user can also zoom-in by dragging the interested period of lines or bars and the product will display the data of the selected period synchronously.
