"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="GitHub Actions",s={unversionedId:"Automation quickstart/GitHub-Actions",id:"Automation quickstart/GitHub-Actions",title:"GitHub Actions",description:"GitHub Actions is a CI (Continuous Integration) and CD (Continuous Delivery) platform to automate build, test, and deployment pipelines. Create workflows to build and test every pull request to the repository or deploy merged pull requests to production.",source:"@site/docs/Automation quickstart/GitHub-Actions.md",sourceDirName:"Automation quickstart",slug:"/Automation quickstart/GitHub-Actions",permalink:"/Automation quickstart/GitHub-Actions",draft:!1,editUrl:"https://github.com/noel046/browserstack-test/tree/Docs/my-website/docs/Automation quickstart/GitHub-Actions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Integrate script with BrowserStack",permalink:"/Automation quickstart/Integrate-with-BrowserStack"}},l={},u=[{value:"Set up CI/CD with GitHub and BrowserStack",id:"set-up-cicd-with-github-and-browserstack",level:2},{value:"Create a new repository",id:"create-a-new-repository",level:2},{value:"Add files to the repository",id:"add-files-to-the-repository",level:2},{value:"Set up GitHub secrets in the repository",id:"set-up-github-secrets-in-the-repository",level:2},{value:"Create configuration file",id:"create-configuration-file",level:2},{value:"Workflow Events",id:"workflow-events",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Jobs",id:"jobs",level:2},{value:"Dependencies",id:"dependencies",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"github-actions"},"GitHub Actions"),(0,o.kt)("p",null,"GitHub Actions is a CI (Continuous Integration) and CD (Continuous Delivery) platform to automate build, test, and deployment pipelines. Create workflows to build and test every pull request to the repository or deploy merged pull requests to production."),(0,o.kt)("h2",{id:"set-up-cicd-with-github-and-browserstack"},"Set up CI/CD with GitHub and BrowserStack"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new GitHub repository for the project and clone it to the local machine.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add Selenium script and any necessary configuration files to the repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set up GitHub secrets in the repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/browserstack.yml")," file in the repository."))),(0,o.kt)("h2",{id:"create-a-new-repository"},"Create a new repository"),(0,o.kt)("p",null,"To create a new repository and clone it to the local machine, refer ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository"},"create a new repo")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"},"clone a repo"),"."),(0,o.kt)("h2",{id:"add-files-to-the-repository"},"Add files to the repository"),(0,o.kt)("p",null,"To add Selenium script and any necessary configuration files to the repository, refer\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project"},"commit and push changes"),"."),(0,o.kt)("h2",{id:"set-up-github-secrets-in-the-repository"},"Set up GitHub secrets in the repository"),(0,o.kt)("h2",{id:"create-configuration-file"},"Create configuration file"),(0,o.kt)("p",null,"Create a browserstack.yml configuration file at the root level of the project. The configuration file contains all the required capabilities to run tests on BrowserStack."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: CI-test-amazon-sign-in\n\non: \n  push:\n    branches: ["main"]\n  pull_request:\n    branches: ["main"]\n\nenv:\n    BROWSERSTACK_USERNAME: ${{ secrets.BROWSERSTACK_USERNAME }}\n    BROWSERSTACK_ACCESS_KEY: ${{ secrets.BROWSERSTACK_ACCESS_KEY }}\n\njobs:\n  build: \n\n    runs-on: ubuntu-latest\n\n    steps:\n    - name: Checkout Code\n      uses: actions/checkout@v3\n    - name: Set up Python\n      uses: actions/setup-python@v4\n      with:\n        python-version: \'3.11\'\n    - name: Install dependencies\n      run: |\n        python -m pip install --upgrade pip\n        pip install -r requirements.txt\n        pip install webdriver-manager\n    - name: Run python script\n      run: |\n        python test-amazonSign-In-BS.py\n')),(0,o.kt)("h2",{id:"workflow-events"},"Workflow Events"),(0,o.kt)("p",null,"Workflows are defined by a YAML file checked in to the repository and will run when triggered by an event in the repository, or it can be triggered manually or at a defined schedule."),(0,o.kt)("p",null,"Workflow is triggered by two events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"push: This event triggers the workflow when code is pushed to the main branch."),(0,o.kt)("li",{parentName:"ul"},"pull_request: This event triggers the workflow when a pull request is opened or updated on the main branch.")),(0,o.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("p",null,"The following environment variables are used in this action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BROWSERSTACK_USERNAME"),": BrowserStack username required to authenticate with the BrowserStack platform. This should be stored as a secret in your repository."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BROWSERSTACK_ACCESS_KEY"),": BrowserStack access key required to authenticate with the BrowserStack platform. This should be stored as a secret in your repository.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"env:\n    BROWSERSTACK_USERNAME: ${{ secrets.BROWSERSTACK_USERNAME }}\n    BROWSERSTACK_ACCESS_KEY: ${{ secrets.BROWSERSTACK_ACCESS_KEY }}\n")),(0,o.kt)("h2",{id:"jobs"},"Jobs"),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"actions/checkout@v3")),": This action checks out the repository code to the runner environment."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"actions/setup-python@v4")),": This action sets up the Python environment on the runner."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"webdriver-manager")),": This package manages the browser drivers required for automated testing."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"requirements.txt")),": This file contains the list of Python packages required for testing."))}d.isMDXComponent=!0}}]);