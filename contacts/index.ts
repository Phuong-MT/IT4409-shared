export class Contacts {
  static AUTH_PATH = "api/auth";
  static PRODUCT_PATH = "api/products";
  static CATEGORY_PATH = "api/categories";
  static PAYMENT_PATH = "api/payment";
  static SEARCH_PATH = "api/search";
  static CART_PATH = "api/cart-products";
  static API_CONFIG = {
    AUTH: {
      LOGIN: {
        URL: `${Contacts.AUTH_PATH}/login`,
        METHOD: "POST",
      },
      REGISTER: {
        URL: `${Contacts.AUTH_PATH}/register`,
        METHOD: "POST",
      },
      LOGOUT: {
        URL: `${Contacts.AUTH_PATH}/logout`,
        METHOD: "POST",
      },
    },
    PRODUCT: {
      // GET: /products?page=1&sort=...
      GET_ALL: {
        URL: `${Contacts.PRODUCT_PATH}`,
        METHOD: "GET",
        PARAMS: ["page", "sort", "idCategory", "minPrice", "maxPrice"],
      },
      // GET: /products/:id
      GET_DETAIL: (id: string) => ({
        URL: `${Contacts.PRODUCT_PATH}/${id}`,
        METHOD: "GET",
      }),
      // POST: /products (Admin only)
      CREATE: {
        URL: `${Contacts.PRODUCT_PATH}`,
        METHOD: "POST",
      },
      // PUT: /products/:id (Admin only)
      UPDATE: (id: string) => ({
        URL: `${Contacts.PRODUCT_PATH}/${id}`,
        METHOD: "PUT",
      }),
      // PATCH: /products/:id/status (Admin only)
      UPDATE_STATUS: (id: string) => ({
        URL: `${Contacts.PRODUCT_PATH}/${id}/status`,
        METHOD: "PATCH",
      }),
    },
    CATEGORY: {
      // GET: /categories (Lấy danh sách)
      GET_ALL: {
        URL: `${Contacts.CATEGORY_PATH}`,
        METHOD: "GET",
      },
      // GET: /categories/:id (Xem chi tiết 1 loại)
      GET_DETAIL: (id: string) => ({
        URL: `${Contacts.CATEGORY_PATH}/${id}`,
        METHOD: "GET",
      }),

      // --- ADMIN ONLY ---
      // POST: /categories (Tạo mới)
      CREATE: {
        URL: `${Contacts.CATEGORY_PATH}`,
        METHOD: "POST",
      },
      // PUT: /categories/:id (Cập nhật toàn bộ)
      UPDATE: (id: string) => ({
        URL: `${Contacts.CATEGORY_PATH}/${id}`,
        METHOD: "PUT",
      }),
      // DELETE: /categories/:id (Xóa)
      DELETE: (id: string) => ({
        URL: `${Contacts.CATEGORY_PATH}/${id}`,
        METHOD: "DELETE",
      }),
    },
    PAYMENT: {
      CREATE: {
        URL: `${Contacts.PAYMENT_PATH}/creator`,
        METHOD: "POST",
      },
      CHECKUPDATE: (orderId: string) => ({
        URL: `${Contacts.PAYMENT_PATH}/check-update/${orderId}`,
        METHOD: "GET",
      }),
    },
    SEARCH: {
      SEARCH_PRODUCTS: {
        /*
         * @query      string   Full-text search (title, description, specs)
         * @brand      string   Filter by brand
         * @categoryId string   Filter by category
         * @specKey    string   Specification key (e.g. Pin, RAM)
         * @specValue  string   Specification value (e.g. 7000mAh)
         * @minPrice   number   Variant min price
         * @maxPrice   number   Variant max price
         * @page       number   Current page (default: 1)
         * @size       number   Page size (default: 20)
         */
        URL: `${Contacts.SEARCH_PATH}/products`,
        METHOD: "GET",
        PARAMS: [
          "query",
          "brand",
          "categoryId",
          "specKey",
          "specValue",
          "minPrice",
          "maxPrice",
          "page",
        ],
      },
    },
    CART: {
      BASE: `${Contacts.CART_PATH}`,
    },
  };
  static Status = {
    //evaluation
    Evaluation: {
      HIDE: 1,
      PUBLIC: 9,
      CREATE: 2,
    },
    //order
    Order: {
      ORDERED: 10,
      PROCESSING: 11,
      SHIPPING: 12,
      DELIVERED: 13,
      CANCELLED: 14,
      RETURNED: 15,
    },
    Payment: {
      UNPAID: 20, // Chưa thanh toán
      PENDING: 21, // Banking: đã tạo link, chờ thanh toán
      PROCESSING: 22, // Banking: bank/MoMo đang xử lý
      PAID: 23, // Thanh toán thành công
      FAILED: 24, // Banking: thất bại
      EXPIRED: 25, // Link hết hạn
      REFUNDED: 26, // Hoàn tiền
      CANCELLED: 27, // Hủy thanh toán
    },
    /*
     ** check validate code checkout session
     */
    Payment_transcript: {
      SUCCESS: 0,
      CANCEL: -1,
      CHECK_UPDATE: 1,
    },
    Payment_check_update: {
      SUCCESS: 0,
      CANCEL: -1,
      PROCESS: 1, // COD
    },
  } as const;
  static Rate = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
  } as const;

  static PaymentMethod = {
    COD: "cod",
    // BANK_TRANSFER: "BANK_TRANSFER",
    MOMO: "momo",
    STRIPE: "stripe",
  };

  static Delivery = {
    STANDARD: "STANDARD",
    EXPRESS: "EXPRESS",
    PICKUP: "PICKUP",
  };

  static Sort = {
    PRICE_ASC: "price_asc",
    PRICE_DESC: "price_desc",
  } as const;
}
