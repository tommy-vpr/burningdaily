import { title } from 'process';
import { FaTruck,
    FaTelegramPlane,
    FaPhoneVolume 

 } from 'react-icons/fa'

 import { IoIosPhonePortrait, IoIosMail } from "react-icons/io";

const icons = [
    {
        title: 'Free Shipping',
        dec: 'When you spend $50+',
        icon: < FaTruck />
    },
    {
        title: 'Same Day Shipping',
        dec: 'Ships same business day if ordered before 3pm',
        icon: <FaTelegramPlane />
    },
    {
        title: 'Give us a call',
        dec: '+1(626) 601 9635',
        icon: <IoIosPhonePortrait />
    }
]

const arrivals = [
    {
        title: 'Torch - Pressure Blend - Disposable - Pink Guava - 3.5G',
        price: '29.99',
        brand: 'TORCH',
        image: 'images/Torch-THCA-PressureBlend-Disposable-PinkGuava-3.5G.webp',
        url: 'https://burningdaily.com/products/torch-thca-pressure-blend-disposable-pink-guava-3-5g'
    },
    {
        title: 'LITTO - KTFO - Disposable - Watermelon OG - 2G',
        price: '19.99',
        brand: 'LITTO',
        image: 'images/LITTO-KTFO-THCA-Disposable-WatermelonOG-2G.webp',
        url: 'https://burningdaily.com/products/litto-ktfo-thca-disposable-watermelon-og-2g'
    },
    {
        title: 'Purlyf - Gummies - Rainbow - 1000MG',
        price: '19.99',
        brand: 'PURLYF',
        image: 'images/Purlyf-Delta8-Gummies-Rainbow-1000MG.webp',
        url: 'https://burningdaily.com/products/purlyf-delta-8-gummies-rainbow-1000mg'
    },
    {
        title: 'Chapo Extrax - Liquid Diamond - Gummies - Mango Tango - 12500MG',
        price: '28.99',
        brand: 'Chapo Extrax',
        image: 'images/ChapoExtrax-THCALiquidDiamond-Gummies-MangoTango-12500MG.webp',
        url: 'https://burningdaily.com/products/chapo-extrax-thca-liquid-diamond-gummies-mango-tango-12500mg'
    },
    {
        title: 'Chapo Extrax - Gummies - Green Apple Bliss - 5000MG',
        price: '27.99',
        brand: 'Chapo Extrax',
        image: 'images/ChapoExtrax-THCA-PHCP-Edible-Gummies-GreenAppleBliss-5000MG_bb4c0cef-9ffd-4868-ae23-ccb0e00e4e90.webp',
        url: 'https://burningdaily.com/products/chapo-extrax-thca-phcp-edible-gummies-green-apple-bliss-5000mg'
    },
    {
        title: 'Canabzy - Gummies - Strawberry Watermelon - 500MG',
        price: '3.99',
        brand: 'CANABZY',
        image: 'images/Canabzy-THCAInfused-Gummies-StrawberryWatermelon-500MG.webp',
        url: 'https://burningdaily.com/products/canabzy-thca-infused-gummies-strawberry-watermelon-500mg'
    },
    {
        title: 'Canabzy - Gummies - Cotton Candy - 500MG',
        price: '3.99',
        brand: 'Canabzy',
        image: 'images/Canabzy-Infused-Gummies-CottonCandy-500MG.webp',
        url: 'https://burningdaily.com/products/canabzy-thca-infused-gummies-cotton-candy-500mg',
    },
    {
        title: 'LITTO - Diamond Encrusted - Preroll - Cotton Candy - 3G',
        price: '17.99',
        brand: 'LITTO',
        image: 'images/LITTO-DiamondEncrusted-Preroll-CottonCandy-3G.webp',
        url: 'https://burningdaily.com/products/litto-thca-diamond-encrusted-preroll-cotton-candy-3g',
    }
]

const deals = [
    {
        title: 'Chapo Extrax - Liquid Diamond - Gummies - Blueberry Shortcake - 1000MG',
        price: '4.99',
        brand: 'CHAPO EXTRAX',
        image: 'images/ChapoExtrax-THCALiquidDiamond-Gummies-BlueberryShortcake-1000MG.webp',
        url: 'https://burningdaily.com/products/chapo-extrax-thca-liquid-diamond-gummies-blueberry-shortcake-1000mg'
    },
    {
        title: 'Hidden Hills - Ultra - Gummies - Sour Blue Razz - 1000MG',
        brand: 'HIDDEN HILLS',
        price: '3.99',
        image: 'images/HiddenHills-THCAUltra-Delta9-THCB-Gummies-SourBlueRazz-1000MG.webp',
        url: 'https://burningdaily.com/products/hidden-hills-thca-ultra-delta-9-thcb-gummies-sour-blue-razz-1000mg'
    },
    {
        title: 'Loose Change - Gummies - Pink Berry - 600MG',
        brand: 'CALI EXTRAX',
        price: '4.99',
        image: 'images/LooseChange-Delta8-THCPLiveRosinBadder-Gummies-PinkBerry-600MG.webp',
        url: 'https://burningdaily.com/products/loose-change-delta-8-thcp-live-rosin-badder-gummies-pink-berry-600mg'
    },
    {
        title: 'STIIIZY Hemp - Edibles - Gummies - Watermelon Wave - 225MG',
        brand: 'STIIIZY HEMP',
        price: '11.99',
        image: 'images/STIIIZYHemp-Delta9-CBD-Edibles-Gummies-WatermelonWave-225MG.webp',
        url: 'https://burningdaily.com/products/stiiizy-hemp-delta-9-cbd-edibles-gummies-watermelon-wave-225mg'
    },
    {
        title: 'Loose Change - Disposable - Georgia Peach - 1G',
        brand: 'CALI EXTRAX',
        price: '14.99',
        image: 'images/LooseChange-Delta8-THCPLiveRosinBadder-Disposable-GeorgiaPeach-1G.webp',
        url: 'https://burningdaily.com/products/loose-change-delta-8-thcp-live-rosin-badder-disposable-georgia-peach-1g'
    },
    {
        title: 'Purlyf - Diamond - Popping Candies - Sour Apple Watermelon - 100MG',
        brand: ' PURLYF',
        price: '2.99',
        image: 'images/Purlyf-Diamond-Delta8-Delta9-PoppingCandies-SourAppleWatermelon-100MG.webp',
        url: 'https://burningdaily.com/products/purlyf-diamond-delta-8-delta-9-popping-candies-sour-apple-watermelon-100mg'
    },
]

export {
    icons,
    arrivals,
    deals
}