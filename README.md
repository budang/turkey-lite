### Note

If you are using this tool for your work please cite:

```
Dang, B., Hutson, M., & Lease, M. (2016). Mmmturkey: A crowdsourcing framework for deploying tasks and recording worker behavior on amazon mechanical turk. arXiv preprint arXiv:1609.00945.
```

## turkey-lite

A JavaScript-only spin-off of the [MmmTurkey](https://github.com/CuriousG102/turkey/) framework for data collection of worker behavior for Amazon Mechanical Turk (AMT). Examples of such *auditors* include recording what someone clicks or when s/he changes tab focus. Unlike the original framework, **turkey-lite** does not require additional setup and can be invoked directly as a script tag in the task HTML file. Results are stored directly in the CSV file where worker-submitted answers would also be recorded. For an example of **turkey-lite** in use, see [here](https://github.com/ambikaverma/CrowdSourcing-Project-MachineAssistedApproach/tree/master/object_detection/correction). **turkey-lite** was developed as a lightweight alternative to MmmTurkey. Unlike MmmTurkey, **turkey-lite** as-is can only be used on AMT but can be easily changed to be used with other platforms; the data-collection code itself is not platform-specific, only the way the data is saved and stored. Some possible options are saving data to S3, DynamoDB, Mongodb, etc. MmmTurkey provides more structure and organization in terms of data storage and collection, but for some the simpler **turkey-lite** may be sufficient. **turkey-lite** was developed and tested using the [AWS/AMT command-line-tools](https://requester.mturk.com/developer/tools/clt).


- A more detailed description of the original framework can be found [here](https://curiousg102.github.io/turkey/index.html#mmmturkey), and a list of its features can be found [here](https://curiousg102.github.io/turkey/features.html). Additionally, you can read our paper [here](https://arxiv.org/abs/1609.00945).
- A complete list of *auditors* and their descriptions can be found [here](https://curiousg102.github.io/turkey/stepsauditors.html#auditors).
- Pull requests may be submitted [here](https://github.com/budang/turkey-lite/pulls).
- Issues and questions may be submitted [here](https://github.com/budang/turkey-lite/issues).

The original MmmTurkey was written by [Miles Hutson](https://github.com/CuriousG102) and [Brandon Dang](https://github.com/budang).

### Usage

#### Production CDN
To use `turkey-lite` as-is with all auditors enabled, add the following script to your HTML:

```html
<script src='https://cdn.jsdelivr.net/gh/budang/turkey-lite@master/js/turkey-lite-prod.js</script>
```
If you would like to select your own auditors, download the `turkey-lite-prod.js` file, modify it to your needs, then add the script to your HTML:
```html
<script src='<some_path>/turkey-lite-prod.js'></script>
```
In the case of the first script, `turkey-lite-prod.js` will be served via [JSDELIVR](https://www.jsdelivr.com/) CDN. In the case of both scripts, resource and auditor scripts will be served via RawGit.

#### Development CDN
If changes were recently pushed to this repo, the above scripts will not load the most recent changes. To access the most up to date scripts, use the development URL:
```html
<script src='https://cdn.jsdelivr.net/gh/budang/turkey-lite/js/turkey-lite-prod.js'></script>
```
If you would like to select your own auditors, follow the steps above, but instead download `turkey-lite-dev.js`. Your HTML script should look like this:
```html
<script src='<some_path>/turkey-lite-dev.js'></script>
```
<!-- As per the [RawGit FAQ](https://github.com/rgrove/rawgit/blob/master/FAQ.md), only use the development scripts for development. When you are ready to move your code to production, please instead use the production scripts above. -->

#### Serve Locally
If you need to modify or add auditors, clone this repo and copy the files into your project directory. When you have finished making your changes, you can include the auditor code using the following script:
```html
<script src='<some_path>/turkey-lite-local.js'></script>
```
Because this file uses the `jQuery.getScript` function, your browser (e.g., Chrome) may block the files from being served if you are testing them locally on your filesystem due to cross-origin concerns. Firefox seems to work, but I have not tried other browsers. This should not be an issue once your files are hosted on a server.








