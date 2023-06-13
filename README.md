# at-gmpa

---

For using this framework install Node.JS from https://nodejs.org/en/

---

For running automation tests locally use next steps after all installations:

1. Open framework in root folder via terminal (./at-gmpa).
2. Run command "npm install".

---

**_Code clear commands_**

- npm run prettier
- npm run eslint

---

**_Mandatory parameters for local running:_**

- appurl - Url where you want to run tests (example: --appurl=https://localhost:8080 or https://reportportal.io);
- tag - Tag which you want to run (example: --tag=@smoke);
- usr = username for local run "superadmin"
- password = password for local run "erebus"
- max-threads - Set count of threads which you need. Standard count is 1;
- apiver - set api HTTP request library (axios or superagent) 

**_Example command for run test locally (enter this command in terminal):_**

_npm run test -- --appurl=http://localhost:8080 --tag=@dashboard --usr=superadmin --password=erebus --max-threads=1

