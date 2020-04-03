const delay = require('mocker-api/utils/delay');
const mockjs = require('mockjs');
const data = {
    'GET /api/index': {
        banner: [
            {
                id: 1,
                product_id: 2573,
                product_image: 'http://ygeshop.kaffa.amgbs.com/_site_1/2020033102.png'
            }
        ],

        products: [
            {
                id: 1,
                product_id: 2425,
                product_status: '预售',
                product_price: '$14.75',
                product_describtion: 'EUNJIWON G1 抱枕套',
                product_image: 'http://m.cn.ygselect.com/data/ygeshop/product/2425/25e8b6ecc9cb92af1c60e0dc92b6cdce.png'
            },
            {
                id: 2,
                product_id: 2423,
                product_status: '在售',
                product_price: '$39.34',
                product_describtion: 'EUNJIWON G1 伞',
                product_image: 'http://m.cn.ygselect.com/data/ygeshop/product/2423/46371091087e0145f372398ecc4dedf1.png'
            },
            {
                id: 3,
                product_id: 2391,
                product_status: '预售',
                product_price: '$14.75',
                product_describtion: 'EUNJIWON G1 水杯',
                product_image: 'http://m.cn.ygselect.com/data/ygeshop/product/2391/c806ee6459bf135592efa38cd3688168.png'
            },
            {
                id: 4,
                product_id: 2385,
                product_status: '在售',
                product_price: '$26.32',
                product_describtion: 'EUNJIWON G1 T恤_I\'M ON FIRE\'',
                product_image: 'http://m.cn.ygselect.com/data/ygeshop/product/2385/f3b4df543d6a11a0f3581e7e4b773f97.png'
            },
            {
                id: 5,
                product_id: 2384,
                product_status: '在售',
                product_price: '$14.75',
                product_describtion: 'EUNJIWON G1 手持迷你风扇',
                product_image: 'http://m.cn.ygselect.com/data/ygeshop/product/2384/544d37f5caefef58dc28482dee1258de.png'
            },
            {
                id: 6,
                product_id: 2383,
                product_status: '在售',
                product_price: '$16.39',
                product_describtion: 'EUNJIWON G1 应援毛巾',
                product_image: 'http://m.cn.ygselect.com/data/ygeshop/product/2383/af28ca357c164eb9b9e8865b11961452.png',
            },
            {
                id: 7,
                product_id: 2388,
                product_status: '在售',
                product_price: '$28.69',
                product_describtion: 'EUNJIWON G1 帽子',
                product_image: 'http://m.cn.ygselect.com/data/ygeshop/product/2388/d0d7681c2d2833f1257638b06435213d.png',
            },
            {
                id: 8,
                product_id: 2392,
                product_status: '在售',
                product_price: '$9.84',
                product_describtion: 'EUNJIWON G1 行李箱吊牌',
                product_image: 'http://m.cn.ygselect.com/data/ygeshop/product/2392/ded7abdead3a67550ec4ba1621b07356.png',
            },
            {
                id: 9,
                product_id: 2422,
                product_status: '在售',
                product_price: '$10.65',
                product_describtion: 'EUNJIWON G1 手机支架',
                product_image: 'http://m.cn.ygselect.com/data/ygeshop/product/2422/cc2b2aa0f7b46239accaecf7c62485bc.png'
            }
        ]
    },
    'GET /api/users/:id': (req, res) => {
        res.json(
            {
                id: req.params.id
            }
        )
    },
    'GET /api/hi': (req, res) => {
        res.json(
            {
                id: 1,
                username: req.query["name"],
            }
        )
    },
    'GET /api/mock': mockjs.mock({
        'list|10-100': 1,
    })
}
module.exports = delay(data, 1000);