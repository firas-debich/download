const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "/youtube-downloader/dist")));

app.get("/", (_, res) => {
  res.sendFile(
    path.resolve(__dirname1, "youtube-downloader", "dist", "index.html")
  );
});
app.post("/download", (req, res) => {
  const url = req.body.url;
  ytdl
    .getBasicInfo(url)
    .then((info) => {
      const title = info.videoDetails.title;
      res.header("Content-Disposition", `attachment: filename=${title}.mp4`);
      ytdl(url, {
        quality: "highest",
        format: "mp4",
      }).pipe(res);
    })
    .catch((err) => console.log(err));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
