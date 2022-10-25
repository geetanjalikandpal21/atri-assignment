import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "top": 40,
        "left": 100
      },
      "callbacks": {}
    },
    "TextBox1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "30px",
        "lineHeight": "",
        "outlineColor": "#e41e1e",
        "fontFamily": "Poppins"
      },
      "custom": {
        "text": "Webfolio X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "right": 670,
        "top": 9,
        "fontSize": "20px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "20px",
        "right": 550,
        "top": 9,
        "position": "absolute",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://fonts.google.com/specimen/IBM+Plex+Sans?query=ibm+plex+sans",
              "target": "_self"
            }
          }
        ]
      }
    },
    "TextBox5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "right": 450,
        "position": "absolute",
        "top": 9,
        "fontSize": "20px",
        "wordWrap": "normal",
        "textAlign": "left",
        "lineHeight": "",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "right": 350,
        "top": 9,
        "fontSize": "20px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15px",
        "height": "15px",
        "position": "absolute",
        "right": 328,
        "top": 14
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arror.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px",
        "overflow": "visible",
        "position": "absolute",
        "right": 271,
        "top": 4
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/%20bag.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex3": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundClip": "border-box",
        "WebkitBackgroundClip": "border-box",
        "backgroundColor": "#ffffff"
      },
      "callbacks": {}
    },
    "Div1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "600px",
        "position": "static"
      },
      "callbacks": {}
    },
    "TextBox7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "right": null,
        "left": 100,
        "top": 200,
        "fontSize": "70px",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "I'm Sam, and I design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "color": "",
        "position": "relative",
        "left": 100,
        "top": 200,
        "fontSize": "70px",
        "float": "left",
        "outlineWidth": "",
        "outlineOffset": "",
        "outlineColor": "",
        "borderWidth": "",
        "borderStyle": "none",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "user interfaces"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "475px",
        "height": "100px",
        "position": "relative",
        "top": 160,
        "left": 100,
        "right": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "70px",
        "position": "relative",
        "top": 200,
        "right": null,
        "left": 130,
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "for startups"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "25px",
        "color": "#7e7676",
        "position": "absolute",
        "left": 100,
        "top": 470
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "25px",
        "left": 100,
        "position": "absolute",
        "top": 500,
        "color": "#7e7676"
      },
      "custom": {
        "text": "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "25px",
        "position": "absolute",
        "top": 530,
        "left": 100,
        "color": "#7e7676"
      },
      "custom": {
        "text": "ad minim veniam, quis nostrud"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "top": 80,
        "left": 100,
        "width": "1200px",
        "height": "20px",
        "color": "#912525"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "",
        "position": "static",
        "width": "90em",
        "overflow": "hidden"
      },
      "callbacks": {}
    },
    "TextBox13": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "left": 550,
        "top": 850,
        "fontSize": "60px",
        "textAlign": "left",
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Past Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "600px",
        "width": "1200px",
        "position": "relative",
        "top": 350,
        "backgroundColor": "#ffffff",
        "left": 100,
        "visibility": "visible",
        "borderColor": "#DEDFDF",
        "borderStyle": "solid"
      },
      "callbacks": {}
    },
    "Image8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "600px",
        "height": "600px",
        "alignSelf": "flex-end",
        "position": "relative",
        "left": 600
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/main.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "left": 50,
        "position": "absolute",
        "top": 200
      },
      "custom": {
        "text": "App X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "10px",
        "width": "30px",
        "position": "absolute",
        "top": 210,
        "left": 130,
        "right": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "top": 200,
        "position": "absolute",
        "left": 190,
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px"
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "30px",
        "fontFamily": "Poppins",
        "top": 250,
        "position": "absolute",
        "left": 50
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "position": "absolute",
        "top": 310,
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "top": 340,
        "position": "absolute",
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "sed do eiusmod tempor incididunt ut labore et dolore magna"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "position": "absolute",
        "top": 370,
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "aliqua ut enim."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 460,
        "left": 50
      },
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px",
        "position": "absolute",
        "bottom": 113,
        "left": 180
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/north_east_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "150px",
        "height": "70px",
        "position": "absolute",
        "bottom": 70,
        "left": 50
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "150px",
        "height": "70px",
        "position": "absolute",
        "bottom": 70,
        "left": 50
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px",
        "position": "absolute",
        "bottom": 113,
        "left": 180
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/north_east_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 460,
        "left": 50
      },
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "position": "absolute",
        "top": 370,
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "aliqua ut enim."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "top": 340,
        "position": "absolute",
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "sed do eiusmod tempor incididunt ut labore et dolore magna"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "position": "absolute",
        "top": 310,
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "30px",
        "fontFamily": "Poppins",
        "top": 250,
        "position": "absolute",
        "left": 50
      },
      "custom": {
        "text": "Brand refresh for Technology app"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "top": 200,
        "position": "absolute",
        "left": 250,
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px"
      },
      "custom": {
        "text": "Branding"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "10px",
        "width": "30px",
        "position": "absolute",
        "top": 210,
        "left": 180,
        "right": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "left": 50,
        "position": "absolute",
        "top": 200
      },
      "custom": {
        "text": "Technology"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "600px",
        "height": "600px",
        "alignSelf": "flex-end",
        "position": "relative",
        "left": 600
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60e660ee7ae7c7704e16b0f3_technology-thumbnail-image-portfolio-x-webflow-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div4": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "600px",
        "width": "1200px",
        "position": "relative",
        "top": 430,
        "backgroundColor": "#ffffff",
        "left": 100,
        "visibility": "visible",
        "borderColor": "#DEDFDF",
        "borderStyle": "solid"
      },
      "callbacks": {}
    },
    "Image16": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "600px",
        "height": "600px",
        "alignSelf": "flex-end",
        "position": "relative",
        "left": 600
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60e65ea2d4406394a3a5237c_consulting-x-thumbnail-image-portfolio-x-webflow-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "left": 50,
        "position": "absolute",
        "top": 200
      },
      "custom": {
        "text": "Consulting X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "10px",
        "width": "30px",
        "position": "absolute",
        "top": 210,
        "left": 190,
        "right": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "top": 200,
        "position": "absolute",
        "left": 250,
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px"
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "30px",
        "fontFamily": "Poppins",
        "top": 250,
        "position": "absolute",
        "left": 50
      },
      "custom": {
        "text": "Website redesign for Consulting X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "position": "absolute",
        "top": 310,
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "top": 340,
        "position": "absolute",
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "sed do eiusmod tempor incididunt ut labore et dolore magna"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "position": "absolute",
        "top": 370,
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "aliqua ut enim."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 460,
        "left": 50
      },
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px",
        "position": "absolute",
        "bottom": 113,
        "left": 180
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/north_east_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "150px",
        "height": "70px",
        "position": "absolute",
        "bottom": 70,
        "left": 50
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "600px",
        "width": "1200px",
        "position": "relative",
        "top": 500,
        "backgroundColor": "#ffffff",
        "left": 100,
        "visibility": "visible",
        "borderColor": "#DEDFDF",
        "borderStyle": "solid"
      },
      "callbacks": {}
    },
    "Image20": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "150px",
        "height": "70px",
        "position": "absolute",
        "bottom": 70,
        "left": 50
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px",
        "position": "absolute",
        "bottom": 113,
        "left": 180
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/north_east_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 460,
        "left": 50
      },
      "custom": {
        "text": "View Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "position": "absolute",
        "top": 370,
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "aliqua ut enim."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "top": 340,
        "position": "absolute",
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "sed do eiusmod tempor incididunt ut labore et dolore magna"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "position": "absolute",
        "top": 310,
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "30px",
        "fontFamily": "Poppins",
        "top": 250,
        "position": "absolute",
        "left": 50
      },
      "custom": {
        "text": "Illustration design for Education X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "top": 200,
        "position": "absolute",
        "left": 250,
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px"
      },
      "custom": {
        "text": "Illustrations"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "10px",
        "width": "30px",
        "position": "absolute",
        "top": 210,
        "left": 190,
        "right": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "left": 50,
        "position": "absolute",
        "top": 200
      },
      "custom": {
        "text": " Education X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "600px",
        "height": "600px",
        "alignSelf": "flex-end",
        "position": "relative",
        "left": 600
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60e65e63519b8e115adf3bb2_education-x-thumbnail-image-portfolio-x-webflow-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div6": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "600px",
        "width": "1200px",
        "position": "relative",
        "top": 570,
        "backgroundColor": "#ffffff",
        "left": 100,
        "visibility": "visible",
        "borderColor": "#DEDFDF",
        "borderStyle": "solid"
      },
      "callbacks": {}
    },
    "Div8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "top": 600,
        "left": 100
      },
      "callbacks": {}
    },
    "TextBox68": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "30px",
        "position": "absolute",
        "left": 500,
        "width": ""
      },
      "custom": {
        "text": "Browse Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px",
        "position": "absolute",
        "bottom": 113,
        "left": 180
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/north_east_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "30px",
        "height": "30px",
        "position": "absolute",
        "bottom": 0,
        "left": 740,
        "top": 6
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/north_east_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "30px",
        "width": "1200px",
        "position": "relative",
        "left": 100,
        "top": 300
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "top": 820,
        "left": 100,
        "height": "30px",
        "width": "1200px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "25px",
        "height": "25px",
        "position": "absolute",
        "bottom": 113,
        "left": 150
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/north_east_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox71": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "50px",
        "fontFamily": "Merriweather",
        "top": 170,
        "position": "absolute",
        "left": 50
      },
      "custom": {
        "text": "Who's behind all this "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox72": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "position": "absolute",
        "top": 310,
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "top": 340,
        "position": "absolute",
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "sed do eiusmod tempor incididunt ut labore et dolore magna"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "position": "absolute",
        "top": 370,
        "left": 50,
        "color": "#686868"
      },
      "custom": {
        "text": "aliqua ut enim."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 460,
        "left": 50
      },
      "custom": {
        "text": "About me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div9": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "600px",
        "width": "1200px",
        "position": "relative",
        "top": 960,
        "backgroundColor": "#ffffff",
        "left": 100,
        "visibility": "visible",
        "borderColor": "#DEDFDF",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "TextBox76": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Merriweather",
        "fontSize": "50px",
        "position": "absolute",
        "top": 230,
        "left": 50
      },
      "custom": {
        "text": "great work?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "left": null,
        "width": "200px",
        "height": "300px",
        "top": null,
        "bottom": 450,
        "right": 40
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about%20me.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "600px",
        "height": "600px",
        "position": "relative",
        "left": 600,
        "top": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/photo%20ladki.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div10": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "1200px",
        "position": "relative",
        "left": 100,
        "top": 1300,
        "borderStyle": "none",
        "borderWidth": "2px",
        "height": "1000px"
      },
      "callbacks": {}
    },
    "TextBox82": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "right": 30,
        "textAlign": "right",
        "bottom": null,
        "float": "none",
        "top": 10
      },
      "custom": {
        "text": "Browse resume"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox84": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "35px",
        "position": "absolute",
        "top": 1
      },
      "custom": {
        "text": "My work skills"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image38": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "25px",
        "height": "25px",
        "position": "absolute",
        "bottom": null,
        "left": 1170,
        "textAlign": "left",
        "alignSelf": "auto",
        "top": 10
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/north_east_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex8": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "height": "400px",
        "position": "absolute",
        "top": 100
      },
      "callbacks": {}
    },
    "Image42": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "200px",
        "width": "150px",
        "position": "relative",
        "top": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/11.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "boxSizing": "content-box",
        "position": "absolute",
        "top": 200,
        "fontFamily": "Poppins",
        "fontSize": "30px"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 260,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox95": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 290,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "adipiscing elit, sed do eiusmod tempor"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox96": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 322,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "bottom": 1,
        "height": "30px",
        "width": "350px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "bottom": 1,
        "height": "30px",
        "width": "350px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox97": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 322,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox98": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 290,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "adipiscing elit, sed do eiusmod tempor"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox99": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 260,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox100": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "boxSizing": "content-box",
        "position": "absolute",
        "top": 200,
        "fontFamily": "Poppins",
        "fontSize": "30px"
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "200px",
        "width": "150px",
        "position": "relative",
        "top": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/33.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex9": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "height": "400px",
        "position": "absolute",
        "top": 100,
        "left": 800,
        "right": null
      },
      "callbacks": {}
    },
    "Image46": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "200px",
        "width": "150px",
        "position": "relative",
        "top": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/55.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox101": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "boxSizing": "content-box",
        "position": "absolute",
        "top": 200,
        "fontFamily": "Poppins",
        "fontSize": "30px"
      },
      "custom": {
        "text": "Brand Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 260,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 290,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "adipiscing elit, sed do eiusmod tempor"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 322,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "bottom": 1,
        "height": "30px",
        "width": "350px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex10": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "height": "400px",
        "position": "relative",
        "top": 150,
        "left": 400
      },
      "callbacks": {}
    },
    "Image48": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "bottom": 1,
        "height": "30px",
        "width": "350px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 322,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 290,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "adipiscing elit, sed do eiusmod tempor"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 260,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "boxSizing": "content-box",
        "position": "absolute",
        "top": 200,
        "fontFamily": "Poppins",
        "fontSize": "30px"
      },
      "custom": {
        "text": "User Research"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image49": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "200px",
        "width": "150px",
        "position": "relative",
        "top": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/44.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex11": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "height": "400px",
        "position": "absolute",
        "top": 550
      },
      "callbacks": {}
    },
    "Image50": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "bottom": 1,
        "height": "30px",
        "width": "350px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 322,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 290,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "adipiscing elit, sed do eiusmod tempor"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 260,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "boxSizing": "content-box",
        "position": "absolute",
        "top": 200,
        "fontFamily": "Poppins",
        "fontSize": "30px"
      },
      "custom": {
        "text": "Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image51": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "200px",
        "width": "150px",
        "position": "relative",
        "top": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/22.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex12": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "height": "400px",
        "position": "relative",
        "top": 100,
        "left": 400
      },
      "callbacks": {}
    },
    "Image52": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "200px",
        "width": "150px",
        "position": "relative",
        "top": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/66.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "boxSizing": "content-box",
        "position": "absolute",
        "top": 200,
        "fontFamily": "Poppins",
        "fontSize": "30px"
      },
      "custom": {
        "text": "Motion Graphics"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 260,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 290,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "adipiscing elit, sed do eiusmod tempor"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 322,
        "fontFamily": "IBM Plex Sans",
        "color": "#686868",
        "fontSize": "20px"
      },
      "custom": {
        "text": "incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image53": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "bottom": 1,
        "height": "30px",
        "width": "350px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex13": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "350px",
        "height": "400px",
        "position": "absolute",
        "top": 550,
        "left": 800,
        "right": null
      },
      "callbacks": {}
    },
    "Div12": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "borderStyle": "none",
        "borderWidth": "0px",
        "position": "absolute",
        "top": 1300,
        "width": "1200px",
        "height": "1000px"
      },
      "callbacks": {}
    },
    "TextBox120": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "top": 1570,
        "left": 100,
        "fontFamily": "Merriweather",
        "fontSize": "35px"
      },
      "custom": {
        "text": "Articles & News"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "top": 1610,
        "textAlign": "right",
        "right": 180,
        "left": null,
        "fontSize": "20px",
        "fontFamily": "Poppins"
      },
      "custom": {
        "text": "Browse more articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image54": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "25px",
        "height": "25px",
        "position": "absolute",
        "bottom": null,
        "left": 1160,
        "textAlign": "left",
        "alignSelf": "auto",
        "top": 1310
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/north_east_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex14": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "left": 100,
        "position": "relative",
        "top": 1630,
        "width": "1200px",
        "height": "400px",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "Image55": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "left": 540,
        "width": "663px",
        "height": "400px",
        "flexGrow": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/1111.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "left": 50,
        "top": 200,
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "color": "#686868"
      },
      "custom": {
        "text": "Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image56": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "10px",
        "width": "30px",
        "position": "relative",
        "top": 400,
        "left": 190,
        "right": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image58": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "10px",
        "width": "30px",
        "position": "absolute",
        "top": 210,
        "left": 136,
        "right": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox123": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 200,
        "left": 200,
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "color": "#686868"
      },
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox124": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "left": 50,
        "top": 250,
        "fontFamily": "Poppins",
        "fontSize": "30px"
      },
      "custom": {
        "text": "What did I learn from doing 50+"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 290,
        "left": 50,
        "fontFamily": "Poppins",
        "fontSize": "30px"
      },
      "custom": {
        "text": "design sprints?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 290,
        "left": 50,
        "fontFamily": "Poppins",
        "fontSize": "30px"
      },
      "custom": {
        "text": "download in 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "left": 50,
        "top": 250,
        "fontFamily": "Poppins",
        "fontSize": "30px"
      },
      "custom": {
        "text": "5 free hot typographies to"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 200,
        "left": 260,
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "color": "#686868"
      },
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image63": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "10px",
        "width": "30px",
        "position": "absolute",
        "top": 210,
        "left": 190,
        "right": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "left": 50,
        "top": 200,
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "color": "#686868"
      },
      "custom": {
        "text": "Typography"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image64": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "left": 540,
        "width": "663px",
        "height": "400px",
        "flexGrow": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/4444.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex17": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "left": null,
        "position": "absolute",
        "top": null,
        "width": "1200px",
        "height": "400px",
        "borderStyle": "none",
        "bottom": 1
      },
      "callbacks": {}
    },
    "Image70": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "bottom": null,
        "height": "30px",
        "width": "1200px",
        "top": 540
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image74": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "bottom": null,
        "height": "30px",
        "width": "1200px",
        "top": 500
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div13": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "top": 2250,
        "left": 100,
        "width": "1200px",
        "height": "400px",
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "TextBox142": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Merriweather",
        "fontSize": "40px",
        "position": "absolute",
        "top": 150
      },
      "custom": {
        "text": "Interested in working together?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Merriweather",
        "fontSize": "40px",
        "position": "absolute",
        "top": 200
      },
      "custom": {
        "text": "Get in touch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image75": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "bottom": null,
        "height": "40px",
        "width": "250px",
        "top": 230
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 200,
        "left": 250,
        "fontFamily": "Merriweather",
        "fontSize": "40px"
      },
      "custom": {
        "text": "today."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "25px",
        "color": "#686868",
        "position": "absolute",
        "top": 280,
        "fontFamily": "IBM Plex Sans"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "25px",
        "color": "#686868",
        "position": "absolute",
        "top": 310
      },
      "custom": {
        "text": "eiusmod tempor incididunt ut labore et dolore "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image76": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "150px",
        "height": "150px",
        "position": "absolute",
        "right": 10,
        "top": 230
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image77": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "bottom": null,
        "height": "30px",
        "width": "1700px",
        "top": 500,
        "right": 99,
        "overflow": "scroll",
        "left": null
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div14": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "top": 2400,
        "width": "1200px",
        "height": "600px",
        "left": 100,
        "borderStyle": "none"
      },
      "callbacks": {}
    },
    "TextBox147": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "top": 100,
        "fontFamily": "Poppins",
        "fontSize": "30px"
      },
      "custom": {
        "text": "WebfolioX"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "color": "#686868",
        "position": "absolute",
        "top": 149
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectetur"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox149": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "color": "#686868",
        "position": "absolute",
        "top": 179
      },
      "custom": {
        "text": "adipiscing elit, sed do eiusmod tempor in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "IBM Plex Sans",
        "fontSize": "20px",
        "fontWeight": "normal",
        "color": "#686868",
        "position": "absolute",
        "top": 205
      },
      "custom": {
        "text": "et dolore magna aliqua."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "color": "#999999",
        "fontSize": "25px",
        "fontFamily": "IBM Plex Sans",
        "position": "absolute",
        "top": 300
      },
      "custom": {
        "text": "Enter your email"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image78": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "bottom": null,
        "height": "20px",
        "width": "380px",
        "top": 350
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox152": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 420,
        "left": null
      },
      "custom": {
        "text": "Subscribe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image79": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "25px",
        "height": "25px",
        "position": "absolute",
        "bottom": null,
        "left": 105,
        "top": 420
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/north_east_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox153": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "30px",
        "position": "absolute",
        "top": 100,
        "left": 450
      },
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox154": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 200,
        "left": 450
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox155": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 250,
        "left": 450
      },
      "custom": {
        "text": "Home V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox156": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 300,
        "left": 450
      },
      "custom": {
        "text": "Home V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 350,
        "left": 450
      },
      "custom": {
        "text": "About V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox158": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 400,
        "left": 450
      },
      "custom": {
        "text": "About V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox159": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 450,
        "left": 450
      },
      "custom": {
        "text": "About V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox160": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 200,
        "left": 600
      },
      "custom": {
        "text": "Blog  V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox161": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 250,
        "left": 600
      },
      "custom": {
        "text": "Blog  V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox162": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 300,
        "left": 600
      },
      "custom": {
        "text": "Blog  V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox163": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 350,
        "left": 600
      },
      "custom": {
        "text": "Blog  Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox164": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 400,
        "left": 600
      },
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox165": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 450,
        "left": 600
      },
      "custom": {
        "text": "Product"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox166": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 200,
        "left": 750
      },
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox167": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 250,
        "left": 750
      },
      "custom": {
        "text": "Case Study"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox168": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 250,
        "left": 750
      },
      "custom": {
        "text": "Case Study"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox169": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 300,
        "left": 750
      },
      "custom": {
        "text": "Past Clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox170": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 350,
        "left": 750
      },
      "custom": {
        "text": "Newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox171": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 400,
        "left": 750
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox172": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "30px",
        "position": "absolute",
        "top": 100,
        "left": 950
      },
      "custom": {
        "text": "Utility Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox173": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 200,
        "left": 950
      },
      "custom": {
        "text": "Start Here"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox174": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 250,
        "left": 950
      },
      "custom": {
        "text": "Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox175": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 300,
        "left": 950
      },
      "custom": {
        "text": "404  Not Found"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox176": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 350,
        "left": 950
      },
      "custom": {
        "text": "Password Protected"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox177": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 400,
        "left": 950
      },
      "custom": {
        "text": "Licenses"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox178": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "20px",
        "position": "absolute",
        "top": 450,
        "left": 950
      },
      "custom": {
        "text": "Changelog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox179": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Poppins",
        "fontSize": "25px",
        "position": "absolute",
        "top": 500,
        "left": 950
      },
      "custom": {
        "text": "More Template"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image80": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "absolute",
        "bottom": null,
        "height": "50px",
        "width": "200px",
        "top": 520,
        "right": 50
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image81": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "bottom": null,
        "height": "30px",
        "width": "1200px",
        "top": 900,
        "left": 100
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image82": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "position": "relative",
        "top": 160,
        "left": 100,
        "height": "30px",
        "width": "1200px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/minus-horizontal-straight-line.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {
    "478": {
      "Image5": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    },
    "767": {
      "Image5": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    },
    "991": {
      "Image5": {
        "styles": {
          "boxShadow": "0px 00px 0px 0px "
        }
      }
    }
  }
}};

function getViewportDimension() {
  const width = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
