export class Contacts {
    static AUTH_PATH = "api/auth";
    static PRODUCT_PATH = "api/products";
    static CATEGORY_PATH = "api/categories";
    static PAYMENT_PATH = "api/payment";
    static API_CONFIG = {
        AUTH: {
            LOGIN: `${Contacts.AUTH_PATH}/login`,
            REGISTER: `${Contacts.AUTH_PATH}/register`,
            LOGOUT: `${Contacts.AUTH_PATH}/logout`,
            REFRESH_TOKEN: `${Contacts.AUTH_PATH}/refresh-token`,
        },
        PRODUCT: {
            BASE: `${Contacts.PRODUCT_PATH}`, // api getAll product có param: ?page=1&sort=price_asc|price_desc&idCategory=&minPrice=&maxPrice=
            DETAIL: (id: string) => `${Contacts.PRODUCT_PATH}/${id}`,
            STATUS: (id: string) => `${Contacts.PRODUCT_PATH}/${id}/status`,
        },

        CATEGORY: {
            BASE: `${Contacts.CATEGORY_PATH}`,
            DETAIL: (id: string) => `${Contacts.CATEGORY_PATH}/${id}`,
        },

        PAYMENT: {
            CREATE: `${Contacts.PAYMENT_PATH}/creator`,
            CHECKUPDATE: (orderId: string) =>
                `${Contacts.PAYMENT_PATH}/check-update/${orderId}`,
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
