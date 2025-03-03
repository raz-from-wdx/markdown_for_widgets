const groups = [
  {
    Name: "widgets",
    Widgets: [
      {
        label: "AG Grid",
        widgetName: "grid-wrapper",
        iconName: "grid-wrapper",
        tags: ["Data"],
      },
      {
        label: "Html",
        widgetName: "html",
        iconName: "default",
        tags: ["Data"],
      },
      {
        label: "Grid",
        widgetName: "grid",
        iconName: "default",
        tags: ["Data"],
      },
      {
        label: "Queue Manager",
        widgetName: "queue-manager",
        iconName: "queue-manager",
        tags: ["Data"],
      },
      {
        label: "FilterGrid",
        widgetName: "filter-grid",
        iconName: "default",
        tags: ["Data"],
      },
      {
        label: "Selector",
        widgetName: "selector",
        iconName: "default",
        tags: ["Data"],
      },
      {
        label: "Search",
        widgetName: "search",
        iconName: "default",
        tags: ["Data"],
      },
      {
        label: "CSV Search",
        widgetName: "csv-search",
        iconName: "csv-search",
        tags: ["Data"],
      },
      {
        label: "Group By",
        widgetName: "groupby",
        iconName: "default",
        tags: ["Data"],
      },
      {
        label: "Group By Portfolio",
        widgetName: "groupby-portfolios",
        iconName: "default",
        tags: ["Data"],
      },
      {
        label: "Valuation",
        widgetName: "valuation",
        iconName: "default",
        tags: ["Data"],
      },
      {
        label: "Documents",
        widgetName: "documents",
        iconName: "documents",
        tags: ["Data"],
      },
      {
        label: "Acts & Docs",
        widgetName: "activities-documents",
        iconName: "activities-documents",
        tags: ["Data"],
      },
      {
        label: "Activities (server)",
        widgetName: "activities-server",
        iconName: "activities-server",
        tags: ["Data", "Full Page"],
      },
      {
        label: "Acts & Docs (server)",
        widgetName: "activities-documents-server",
        iconName: "activities-documents-server",
        tags: ["Data"],
      },
      {
        label: "Documents Browser",
        widgetName: "documents-browser",
        iconName: "documents-browser",
        tags: ["Data"],
      },
      {
        label: "Summary",
        widgetName: "summary",
        iconName: "summary",
        tags: ["Data"],
      },
      {
        label: "Life Cycle",
        widgetName: "life-cycle",
        iconName: "life-cycle",
        tags: ["Data"],
      },
      {
        label: "Document Management",
        widgetName: "document-management",
        iconName: "document-management",
        tags: ["Data"],
      },
      {
        label: "Process Type List",
        widgetName: "process-type-list",
        iconName: "process-type-list",
        tags: ["Data"],
      },
      {
        label: "Process Diagram",
        widgetName: "process-diagram",
        iconName: "process-diagram",
        tags: ["Data"],
      },
      {
        label: "Data Upload",
        widgetName: "data-upload",
        iconName: "data-upload",
        tags: ["Data"],
      },
      {
        label: "Client Summary",
        widgetName: "client-summary",
        iconName: "client-summary",
        tags: ["Data"],
      },
      {
        label: "Chart",
        widgetName: "chart",
        iconName: "default",
        tags: ["Charts"],
      },
      {
        label: "Charts And Graphs",
        widgetName: "charts-and-graphs",
        iconName: "default",
        tags: ["Charts"],
      },
      {
        label: "Charts & HTML",
        widgetName: "charts-html",
        iconName: "default",
        tags: ["Charts"],
      },
      {
        label: "Charts & HTML - Generic",
        widgetName: "charts-html-generic",
        iconName: "default",
        tags: ["Charts"],
      },
      {
        label: "Relationship Tree-Interactive",
        widgetName: "relationship-tree-interactive",
        iconName: "default",
        tags: ["Charts"],
      },

      {
        label: "Tiles",
        widgetName: "tiles",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Power App",
        widgetName: "power-app",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Notes",
        widgetName: "notes",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Dashboard Action Grid",
        widgetName: "dashboardgridwithactions",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Kanban",
        widgetName: "kanban",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Toggles",
        widgetName: "toggles",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Toggles Spa (Spa Layout Only)",
        widgetName: "toggles-spa",
        iconName: "default",
        tags: ["Advanced", "SPA"],
      },
      {
        label: "Dropdown Toggles",
        widgetName: "dropdown-toggles",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Profile",
        widgetName: "profile",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Details Card",
        widgetName: "details-card",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Next Actions",
        widgetName: "nextactions",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Create Entity",
        widgetName: "create-entity",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Consent widget",
        widgetName: "consent",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Addresses",
        widgetName: "addresses",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Address Link",
        widgetName: "address-link",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Forms Navigator",
        widgetName: "forms-navigator",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Marketing List",
        widgetName: "marketing-list",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Marketing List Membership",
        widgetName: "marketing-list-membership",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Opp manager",
        widgetName: "opportunity-manager",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Questions List",
        widgetName: "questions-list",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Opp progress",
        widgetName: "opportunity-progress",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "HTML Button",
        widgetName: "html-button",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Duplicate Client",
        widgetName: "duplicate-clients",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Associated Staff",
        widgetName: "widget-associated-staff",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "ChatBot",
        widgetName: "assistant",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Component Loader",
        widgetName: "component-loader",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "External Registration",
        widgetName: "external-registration-verification",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "External Logon",
        widgetName: "external-logon",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Work Item Update",
        widgetName: "work-item-update",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "World Check/Refinitiv",
        widgetName: "world-check-refinitiv",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "LinkedIn",
        widgetName: "linkedin",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Service Request",
        widgetName: "service-request",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Notifications",
        widgetName: "notifications",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Configurer Outlet",
        widgetName: "configurer-outlet",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Articles",
        widgetName: "articles",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "Message-Wall",
        widgetName: "message-wall",
        iconName: "default",
        tags: ["Advanced", "Full Page"],
      },
      {
        label: "Multi-Selector",
        widgetName: "multi-selector",
        iconName: "default",
        tags: ["Advanced"],
      },
      {
        label: "KYC Review V2",
        widgetName: "kyc-review-v2",
        iconName: "default",
        tags: ["Advanced", "Full Page"],
      },

      { label: "MEE", widgetName: "mee", iconName: "default", tags: ["Form"] },
      {
        label: "Mini-Mee",
        widgetName: "minimee",
        iconName: "default",
        tags: ["Form"],
      },
      {
        label: "Amendments Mini-Mee",
        widgetName: "minimee-amendments",
        iconName: "default",
        tags: ["Form"],
      },
      {
        label: "Nav Selector",
        widgetName: "nav-selector",
        iconName: "default",
        tags: ["Form"],
      },
      {
        label: "MEE List",
        widgetName: "mee-list",
        iconName: "default",
        tags: ["Form"],
      },
      {
        label: "MEE Stepper",
        widgetName: "mee-stepper",
        iconName: "default",
        tags: ["Form"],
      },
      {
        label: "MEE State",
        widgetName: "mee-state",
        iconName: "default",
        tags: ["Form"],
      },
      {
        label: "MEE Main Button",
        widgetName: "mee-main-button",
        iconName: "default",
        tags: ["Form"],
      },
      {
        label: "Application History",
        widgetName: "application-history",
        iconName: "default",
        tags: ["Form"],
      },
      {
        label: "Application Content",
        widgetName: "application-content",
        iconName: "default",
        tags: ["Form"],
      },
      {
        label: "Application Work Items",
        widgetName: "application-workitems",
        iconName: "default",
        tags: ["Form"],
      },
      {
        label: "Application Accounts",
        widgetName: "application-accounts",
        iconName: "default",
        tags: ["Form"],
      },
    ],
  },
];
