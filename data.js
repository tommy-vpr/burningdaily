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
        title: 'Little High - Delta 8 - Disposable - Strawberry Cough - 2G',
        price: '21.99',
        brand: 'LITTLE HIGH',
        image: 'images/LittleHigh-Delta8-Disposable-StrawberryCough-2G.webp'
    },
    {
        title: 'TreHouse - Live Rosin - Liquid Diamond - Disposable - Frosted Guava - 3.5G',
        price: '39.99',
        brand: 'TRE HOUSE',
        image: 'images/TreHouse-LiveRosin-THCA-Disposable-FrostedGuava-3.5G.webp'
    },
    {
        title: 'Xhale - Live Resin - Px9 - Disposable - Super Silver Haze - 2G',
        price: '24.99',
        brand: 'XHALE',
        image: 'images/Xhale-LiveResin-THCA-Px9-Disposable-SuperSilverHaze-2G.webp'
    },
    {
        title: 'Xhale - Live Resin - Px9 - Disposable - Candy Gas - 2G',
        price: '24.99',
        brand: 'XHALE',
        image: 'images/Xhale-LiveResin-THCA-Px9-Disposable-CandyGas-2G.webp'
    },
    {
        title: 'Canna River - Delta 8 - Disposable - Blue Dream - 2G',
        price: '24.99',
        brand: 'CANNA RIVER',
        image: 'images/CannaRiver-Delta8-Disposable-BlueDream-2G.webp'
    },
    {
        title: 'GRDNT - Galaxy Chews - Gummies - Sweet Strawberry - 10000MG',
        price: '27.99',
        brand: 'GRDNT',
        image: 'images/GRDNT-GalaxyChews-Gummies-SweetStrawberry-10000MG.webp'
    },
    {
        title: 'Purlyf - Delta 8 - Gummies - Apple - 1000MG',
        price: '19.99',
        brand: 'PURLYF',
        image: 'images/Purlyf-Delta8-Gummies-Apple-1000MG.webp'
    },
    {
        title: 'Purlyf - Delta 8 - Gummies - Rainbow - 1000MG',
        price: '19.99',
        brand: 'PURLYF',
        image: 'images/Purlyf-Delta8-Gummies-Rainbow-1000MG.webp'
    },
]

const deals = [
    {
        title: 'Chapo Extrax - Liquid Diamond - Gummies - Blueberry Shortcake - 1000MG',
        price: '4.99',
        brand: 'CHAPO EXTRAX',
        image: 'images/ChapoExtrax-THCALiquidDiamond-Gummies-BlueberryShortcake-1000MG.webp'
    },
    {
        title: 'Hidden Hills - Ultra - Delta 9 - Gummies - Sour Blue Razz - 1000MG',
        brand: 'HIDDEN HILLS',
        price: '3.99',
        image: 'images/HiddenHills-THCAUltra-Delta9-THCB-Gummies-SourBlueRazz-1000MG.webp'
    },
    {
        title: 'Loose Change - Delta 8 - Live Rosin Badder - Gummies - Pink Berry - 600MG',
        brand: 'CALI EXTRAX',
        price: '4.99',
        image: 'images/LooseChange-Delta8-THCPLiveRosinBadder-Gummies-PinkBerry-600MG.webp'
    },
    {
        title: 'STIIIZY Hemp - Delta 9 - CBD - Edibles - Gummies - Watermelon Wave - 225MG',
        brand: 'STIIIZY HEMP',
        price: '11.99',
        image: 'images/STIIIZYHemp-Delta9-CBD-Edibles-Gummies-WatermelonWave-225MG.webp'
    },
    {
        title: 'Loose Change - Delta 8 - Live Rosin Badder - Disposable - Georgia Peach - 1G',
        brand: 'CALI EXTRAX',
        price: '14.99',
        image: 'images/LooseChange-Delta8-THCPLiveRosinBadder-Disposable-GeorgiaPeach-1G.webp'
    },
    {
        title: 'Kush Burst x Ghost - HHCO - Edible - Gummies - Juicy Watermelon - 500MG',
        brand: ' KUSH BURST',
        price: '14.99',
        image: 'images/KushBurstxGhost-HHCO-Edible-Gummies-JuicyWatermelon-500MG.webp'
    },
    {
        title: 'Honeyroot - Delta 8 - Disposable - Honey Kush - 1G',
        brand: 'HONEYROOT',
        price: '14.99',
        image: 'images/HoneyRootWellness-Delta8-DisposableVape-HoneyKush.jpg'
    },
]

export {
    icons,
    arrivals,
    deals
}