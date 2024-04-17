module.exports = (app: {
  listen: (arg0: any, arg1: () => void) => void;
  get: (arg0: string) => any;
}) => {
  app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`);
  });
};
