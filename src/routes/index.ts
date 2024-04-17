module.exports = (app: any) => {
  app.get(
    "/",
    (req: any, res: { json: (arg0: { response: string }) => void }) => {
      res.json({
        response: "Devices Api Works!",
      });
    }
  );
};
