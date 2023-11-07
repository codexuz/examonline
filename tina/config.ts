import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = "main";
const fields= [
  {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  {
            type: "string",
            name: "description",
            label: "Description",
          },{
            type: "datetime",
            name: "pubDate",
            label: "Publish Date",
            ui: {
              dateFormat: "DD MMMM YYYY"
            },
          },
  {
    type: "rich-text",
    name: "body",
    label: "Body",
    isBody: true,
  },
]

export default defineConfig({
  branch,
  clientId: '67d9fa8f-84e1-436d-8b37-5f89fc27f281', // Get this from tina.io
  token: 'cde36b03fee84407ffbe43a890bdd3570099084f', // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/pages/blog",
        fields,
      },
      {
        name: "fullmock",
        label: "Full Mock",
        path: "src/pages/fullmock",
        fields,
      },
      {
        name: "listening",
        label: "Listening",
        path: "src/pages/listening",
        fields,
      },
      {
        name: "reading",
        label: "Reading",
        path: "src/pages/reading/mock",
        fields,
      }
    ],
  },
});
