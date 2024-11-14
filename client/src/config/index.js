export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "applieness", label: "Applieness" },
      { id: "cleaning", label: "Cleaning" },
      { id: "grocery", label: "Grocery" },
      { id: "toysAndAcessries", label: "Toys And Acessries" },
      { id: "vegitableAndFruits", label: "Vegitable And Fruits" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "unilever", label: "Unilever" },
      { id: "samsung", label: "Samsung" },
      { id: "freshFruits", label: "Fresh Fruits" },
      { id: "bakeporlar", label: "Bakeporlar" },
      { id: "national", label: "National" },
      { id: "toyes", label: "Toyes" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "applieness",
    label: "Applieness",
    path: "/shop/listing",
  },
  {
    id: "cleaning",
    label: "Cleaning",
    path: "/shop/listing",
  },
  {
    id: "grocery",
    label: "Grocery",
    path: "/shop/listing",
  },
  {
    id: "toysAndAcessries",
    label: "Toys And Acessries",
    path: "/shop/listing",
  },
  {
    id: "vegitableAndFruits",
    label: "Vegitable And Fruits",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  applieness: "Applieness",
  cleaning: "Cleaning",
  grocery: "Grocery",
  toysAndAcessries: "Toys And Acessries",
  vegitableAndFruits: "Vegitable And Fruits",
};

export const brandOptionsMap = {
  unilever: "Unilever",
  samsung: "Samsung",
  bakeporlar: "bakeporlar",
  freshFruits: "Fresh Fruits",
  toyes: "Toyes",
  "national": "National",
};

export const filterOptions = {
  category: [
    { id: "applieness", label: "Applieness" },
    { id: "cleaning", label: "Cleaning" },
    { id: "grocery", label: "Grocery" },
    { id: "toysAndAcessries", label: "Toys And Acessries" },
    { id: "vegitableAndFruits", label: "Vegitable And Fruits" },
  ],
  brand: [
    { id: "unilever", label: "Unilever" },
    { id: "samsung", label: "Samsung" },
    { id: "bakeporlar", label: "bakeporlar" },
    { id: "freshFruits", label: "Fresh Fruits" },
    { id: "toyes", label: "Toyes" },
    { id: "national", label: "National" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
