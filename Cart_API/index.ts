import express, { Application, Request, Response } from 'express';
import { itemRouter } from './routes';

const app:Application = express();

const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// This says that "if the URL includes 'items', then go to the itemRouter"
// Look at the itemRouter in routes.ts for additional notes
app.use("/cart-items", itemRouter);
// For example, you could have another one for 'customers' and it would look like this
// app.use("/customers", customerRouter);

// Listen takes two parameter: what port do you want me to run on, when started up successfully then what do you want me to do
// In our case we are using port 3000 (defined above) and we console.log the message shown
app.listen(port, ():void=> {
    console.log(`Listening on port ${port}`);
});