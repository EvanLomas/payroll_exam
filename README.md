# Setup
```
npm install -g gulp-cli
npm install
```

# Commands

See all gulp commands:
```
gulp help
```

Start server
```
gulp serve
```

# Folder structure

Server API endpoints:
```
/app/api
```

Server components:
```
/app/components
```

Client files:
```
/public
```

Stored payslips:
```
/payslips
```

# Important Notes to Examiner

While the information for this task was perfectly clear, I made the mistake early on in the project of moving step by step through the documentation whenever time was available to me instead of interpreting the instructions as a whole. As a result I assumed initially this would be a node-orientated task and therefor built the specified calculations and appropriate unit tests into the node server as a component (in a real world scenario such calculations should be policed and enforced by protected code after all to ensure data cohesion and accuracy on submission to a payment platform)

Once this was complete and an initial data submission process was built I found the visual specifications given in the task and refactored the front end code to perform the tasks I previous wrote into the backend.

In this exam you will find unit tests for the backend code but not the front end code (time was running out so I have submitted what I have completed).

There were a number of short cuts and assumptions taken in the backend code and notes have been provided where possible to explain better approaches which could/should be achieved with more time on my plate.

The payslip generated is stored in /payslips as a json file which could be used for future calculations, indexing, pdf generation, etc. and notes about this generation and what could be improved with a real world scenario and a mindful goal are detailed in /app/components/payslips/save/index.js

More unit tests were planned throughout the backend but time limitations meant I had to limit what I implemented.

In a real world scenario with a large project I would have used tools such as webpack, angular, etc. to flesh out the interface, provide live calculations and build a more componentized codebase for easier maintenance and documentation if required.
