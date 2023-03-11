import { app } from './app';

app.listen(process.env.PORT || 8080, () =>
  console.log(
    `App is running on http://localhost:${process.env.PORT || 8080}/open`
  )
);
