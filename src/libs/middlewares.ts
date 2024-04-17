import bodyParser from "body-parser";
import morgan from "morgan";

module.exports = (app: any) => {
  app.set("port", process.env.PORT || 3000);
  app.set("json spaces", 4);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(morgan("dev"));

  app.use(function (
    _req: any,
    res: { header: (arg0: string, arg1: string) => void },
    next: () => void
  ) {
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
};
