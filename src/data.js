import moment from "moment"


export const products = [
    {   
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "SoundBox Pro Portable",
        price: 18_000,
        discount: 10,
        index: 1,
        type: "tea",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    },
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Naham WiFi HD 1080",
        price: 18_000,
        index: 2,
        type: "tea",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    },    
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 3,
        type: "tea",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",

    },    
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 4,
        type: "tea",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",

    },
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 5,
        type: "tea",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",

    },
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 6,
        type: "coffee",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",

    },
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 7,
        type: "coffee",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",

    },
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 8,
        type: "coffee",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",

    },
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 9,
        type: "coffee",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",

    },
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 10,
        type: "coffee",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",

    },
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 11,
        type: "hi-coffee",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",

    },    
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 12,
        type: "hi-coffee",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    },    
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 13,
        type: "hi-coffee",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",

    },    
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 14,
        type: "hi-coffee",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    },    
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 15,
        type: "hi-coffee",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    },    
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 16,
        type: "hi-coffee",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    },
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 17,
        type: "hi-tea",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    },    
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 18,
        type: "hi-tea",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    },
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 19,
        type: "hi-tea",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    },
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 20,
        type: "hi-tea",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    },    
    {
        thumbnail: "https://product.hstatic.net/1000075078/product/1653291204_hi-tea-vai_24673f2fda464065a0ba0707ca8ef5b1.jpg",
        name: "Polk Audio T30 Speaker",
        price: 18_000,
        index: 21,
        type: "hi-tea",
        brand: "studio design",
        desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    },
]

export const size = [
    {
        name: "Vừa",
        extraPrice: 0
    },

    {
        name: "Trung",
        extraPrice: 6_000
    },
    {
        name: "Lớn",
        extraPrice: 8_000
    }
]
export const toppings = [
    {
        id: 1,
        name: "Đào ngâm",
        price: 10_000
    },
    {
        id: 2,
        name: "Trân châu trắng",
        price: 15_000
    },
    {
        id: 3,
        name: "Foam Cheese",
        price: 20_000
    }
]

export const Blog = [
    {
        article_id: 1,
        title: "10 LỢI ÍCH KHÔNG NGỜ CỦA TRÀ HOA HIBISCUS",
        content: "Với rất nhiều lợi ích vượt trội, trà hoa Hibiscus được nhiều chị em ưu tiên chọn lựa để tăng cường sức khỏe, cải thiện sắc đẹp và giúp tinh thần thêm hứng khởi.",
        date: moment(),
        ad_id: 0,
        image: "https://file.hstatic.net/1000075078/article/pr-cover_41de066c6f654ee9b318dbffe7e5e5f0_master.jpg"
    },

    {
        article_id: 2,
        title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
        content: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        date: moment(),
        ad_id: 1,
        image: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_master.jpg"

    },    
    {
        article_id: 3,
        title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
        content: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        date: moment(),
        ad_id: 1,
        image: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_master.jpg"

    },    
    {
        article_id: 4,
        title: "10 LỢI ÍCH KHÔNG NGỜ CỦA TRÀ HOA HIBISCUS",
        content: "Với rất nhiều lợi ích vượt trội, trà hoa Hibiscus được nhiều chị em ưu tiên chọn lựa để tăng cường sức khỏe, cải thiện sắc đẹp và giúp tinh thần thêm hứng khởi.",
        date: moment(),
        ad_id: 0,
        image: "https://file.hstatic.net/1000075078/article/pr-cover_41de066c6f654ee9b318dbffe7e5e5f0_master.jpg"
    },
    {
        article_id: 5,
        title: "10 LỢI ÍCH KHÔNG NGỜ CỦA TRÀ HOA HIBISCUS",
        content: "Với rất nhiều lợi ích vượt trội, trà hoa Hibiscus được nhiều chị em ưu tiên chọn lựa để tăng cường sức khỏe, cải thiện sắc đẹp và giúp tinh thần thêm hứng khởi.",
        date: moment(),
        ad_id: 0,
        image: "https://file.hstatic.net/1000075078/article/pr-cover_41de066c6f654ee9b318dbffe7e5e5f0_master.jpg"
    },    
    {
        article_id: 6,
        title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
        content: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        date: moment(),
        ad_id: 1,
        image: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_master.jpg"

    },
]


// CREATE TABLE `user` (
//     user_id INT NOT NULL AUTO_INCREMENT,
//     username VARCHAR(100) NOT NULL,
//     `password` VARCHAR(100) NOT NULL,
//     `name` VARCHAR(100) NOT NULL,
//     address VARCHAR(100) NOT NULL,
//     `role` ENUM('cus', 'ad') NOT NULL,
//     PRIMARY KEY (user_id)
// );

