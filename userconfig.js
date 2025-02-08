let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Moncton",
    scale: "C"
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962"
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"]
    }
  },
  keybindings: {
    s: "search-bar",
    q: "config-tab"
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.qwenlm.ai/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [
        {
          name: "Art Platforms",
          links: [
            {
              name: "artistree",
              url: "https://artistree.io/request/yonniboi",
              icon: "trees",
              icon_color: "#a9b665"
            },
            {
              name: "instagram",
              url: "https://www.instagram.com/yonni_boi/",
              icon: "brand-meta",
              icon_color: "#7daea3"
            },
            {
              name: "toyhouse",
              url: "https://toyhou.se/Yonniboi",
              icon: "home",
              icon_color: "#e78a4e"
            },
            {
              name: "bluesky",
              url: "https://bsky.app/profile/yonniboi.bsky.social",
              icon: "sun",
              icon_color: "#ea6962"
            },
            {
              name: "cara",
              url: "https://cara.app/yonni/all",
              icon: "cookie",
              icon_color: "#d3869b"
            },
            {
              name: "sheezyart",
              url: "https://sheezy.art/yonniboi",
              icon: "brush",
              icon_color: "#86d3bc"
            },
            {
              name: "artfight",
              url: "http://artfight.net/~Yonni",
              icon: "chart-radar",
              icon_color: "#d3cd7f"
            },
            {
              name: "artfight",
              url: "https://ko-fi.com/yonni",
              icon: "coffee",
              icon_color: "#d83f3f"
            }
          ]
        },
        {
          name: "Games",
          links: [
            {
              name: "chess",
              url: "https://www.chess.com/home",
              icon: "chess-queen-filled",
              icon_color: "#a9b665"
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: "#e78a4e"
            },
            {
              name: "tetris",
              url: "https://tetris.com/",
              icon: "brand-apple-arcade",
              icon_color: "#ea6962"
            }
          ]
        },
        {
          name: "Video",
          links: [
            {
              name: "cineby",
              url: "https://www.cineby.app/",
              icon: "movie",
              icon_color: "#7daea3"
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube-filled",
              icon_color: "#ea6962"
            }
          ]
        }
      ]
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962"
            },
            {
              name: "vk",
              url: "https://vk.com/conceptart",
              icon: "photo",
              icon_color: "#7daea3"
            }
          ]
        },
        {
          name: "resources",
          links: [
            {
              name: "visual library",
              url: "https://characterdesignreferences.com/visual-library",
              icon: "books",
              icon_color: "#d3869b"
            },
            {
              name: "uxpro",
              url: "https://uxpro.cc/",
              icon: "components",
              icon_color: "#a9b665"
            },
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962"
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#7daea3"
            }
          ]
        },
        {
          name: "art academy",
          links: [
            {
              name: "art curriculum",
              url: "https://www.soloartcurriculum.com/",
              icon: "brand-patreon",
              icon_color: "#7daea3"
            },
            {
              name: "quickposes",
              url: "https://quickposes.com/en/gestures/timed",
              icon: "karate",
              icon_color: "#7fae7d"
            },
            {
              name: "line of action",
              url: "https://line-of-action.com/",
              icon: "users",
              icon_color: "#7daea3"
            },
            {
              name: "proko",
              url: "https://www.youtube.com/user/ProkoTV/videos",
              icon: "cat",
              icon_color: "#7daea3"
            }
          ]
        }
      ]
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3"
            },
            {
              name: "awesome-css",
              url: "https://github.com/awesome-css-group/awesome-css",
              icon: "brand-gitlab",
              icon_color: "#e78a4e"
            },
                       {
              name: "awesome-cli",
              url: "https://github.com/agarrharr/awesome-cli-apps",
              icon: "terminal-2",
              icon_color: "#4ee784"
            }
          ]
        },
        {
          name: "learning",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482"
            },
            {
              name: "codédex",
              url: "https://www.codedex.io/",
              icon: "pokeball",
              icon_color: "#9cc672"
            },
            {
              name: "freecodecamp",
              url: "https://www.freecodecamp.org/learn/the-odin-project/",
              icon: "code",
              icon_color: "#ea6962"
            },
            {
              name: "html references",
              url: "https://htmlreference.io/",
              icon: "html",
              icon_color: "#7daea3"
            },
                        {
              name: "resplit",
              url: "https://replit.com/@chippercheek/First-Line-of-Code#main.py",
              icon: "brand-python",
              icon_color: "#9b7dae"
            },
                                    {
              name: "bash guide",
              url: "https://github.com/Idnan/bash-guide",
              icon: "line",
              icon_color: "#9b7dae"
            }
          ]
        },
        {
          name: "challenges",
          links: [
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665"
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e"
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962"
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665"
            }
          ]
        }
      ]
    },
    {
      name: "repos",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "fmhy",
              url: "https://fmhy.net/",
              icon: "bat",
              icon_color: "#ea6962"
            },
            {
              name: "z-lib",
              url: "https://z-lib.gs/",
              icon: "book",
              icon_color: "#ea6962"
            }
          ]
        },
        {
          name: "storage",
          links: [
            {
              name: "filen",
              url: "https://app.filen.io/#/login",
              icon: "brand-storj",
              icon_color: "#e78a4e"
            },
            {
              name: "mega",
              url: "https://mega.nz/login",
              icon: "brand-medium",
              icon_color: "#7daea3"
            },
            {
              name: "playbook",
              url: "https://www.playbook.com/yonniboi/sign-in",
              icon: "masks-theater",
              icon_color: "#ea6962"
            },
            {
              name: "imgbb",
              url: "https://melyssa-lake.imgbb.com/",
              icon: "message-chatbot",
              icon_color: "#62baea"
            }
          ]
        },
        {
          name: "business",
          links: [
            {
              name: "notion",
              url: "https://www.notion.so/Project-Planner-Crafty-Corner-16c89569811280afabf3ed1047c96043",
              icon: "brand-notion",
              icon_color: "#e78a4e"
            },
                        {
              name: "design resources",
              url: "https://github.com/goabstract/Awesome-Design-Tools",
              icon: "address-book",
              icon_color: "#7daea3"
            },
                        {
              name: "graphic resources",
              url: "https://rentry.co/2ndBrain",
              icon: "photo-filled",
              icon_color: "#ea6962"
            }
          ]
        }
      ]
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-5.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "proton mail",
              url: "https://proton.me/mail",
              icon: "brand-gmail",
              icon_color: "#ea6962"
            },
            {
              name: "outlook",
              url: "https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fowa%2f&sdf=0",
              icon: "cloud-lock-open",
              icon_color: "#62ea68"
            }
          ]
        },
        {
          name: "adhd",
          links: [
            {
              name: "anytype",
              url: "https://anytype.io/",
              icon: "brain",
              icon_color: "#e78a4e"
            },
            {
              name: "ticktick",
              url: "https://www.ticktick.com/",
              icon: "matchstick",
              icon_color: "#7daea3"
            },
            {
              name: "awesome-mental-health",
              url: "https://dreamingechoes.github.io/awesome-mental-health/#/",
              icon: "photo-filled",
              icon_color: "#ea6962"
            },
                        {
              name: "learn-anything",
              url: "https://learn-anything.xyz/",
              icon: "planet",
              icon_color: "#a9b665"
            }
          ]
        },
        {
          name: "school",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3"
            },
            {
              name: "brightspace",
              url: "https://elearning.nbcc.ca/d2l/home",
              icon: "school",
              icon_color: "#7d8eae"
            },
            {
              name: "nbcc - ace",
              url: "https://nbcc-ac-vcsa.nbcc.ca/ui",
              icon: "brand-docker",
              icon_color: "#9cc672"
            },
            {
              name: "azure portal",
              url: "https://portal.azure.com/#home",
              icon: "brand-azure",
              icon_color: "#e379a5"
            }
          ]
        }
      ]
    }
  ]
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function () {
  var css = document.createElement("link");
  css.href = "src/css/tabler-icons.min.css";
  css.rel = "stylesheet";
  css.type = "text/css";
  if (!CONFIG.config.localIcons) document.getElementsByTagName("head")[0].appendChild(css);
})();
