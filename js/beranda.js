document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            id: 1,
            name: "CANON EOS 1000D",
            image:"../aset/1.webp",
            price: "Rp. 1.650.000",
            desc: ["adapter tempat memori", "tas siap untuk hunting", "kain microfiber / selica gell", "Bisa reques efek picture style kaka"],
        },
        {
            id: 2,
            name: "Dell Inspiron 2-In-1 Core i5",
            image: "../aset/2.avif",
            price: "Rp. 22.198.000",
            desc: ["Geratis Ongkir", "Platinum Silver", "Intel Core i5 1155G7", "Intel(R) Iris(R) Xe", "8GB DDR4", "512 SSD"],
        },
        {
            id: 3,
            name: "Galaxy S24 Ultra",
            image: "../aset/3.jpg",
            price: "Rp.19.000.000",
            desc: ["Merk : Samsung", "Kategori : Handphone", "Os : Androit", "Memory : 256GB", "Batre : 5000mAh, Super Fast Charging, Fast Wireless Charging 2.0, Wireless PowerShare"],
        },
        {
            id: 4,
            name: "xiaomi Robot Vacuum",
            image: "../aset/4.webp",
            price: "Rp.2.329.899",
            desc: ["Dimensions (mm) Main unit : Φ325x80, Charging Dock : 146x122x87.5", "Rated Power (W) 35", "Rated Voltage (V) 14.4", "Charging Voltage (V) 20", "Battery Capacity (mAh) 2500 (rated capacity); 2600 (nominal capacity)", "Charging Dock Rated Input (V) 20/0.6A"]
        },
        {
            id: 5,
            name: "Royalstrar Ove",
            image: "../aset/5.webp",
            price: "Rp.1.125.000",
            desc: ["FREE GIFT 1 SET isi 10 MANGKUK STAINLESS!", "Penghangat makanan", "Kapasitas 12Liter", "Pemanggang Listri"],
        },
        {
            id: 6,
            name: "Han River Air Fryer Electric",
            image: "../aset/6.jpeg",
            price: "Rp.719.000",
            desc: ["Memasak nasi", "Kapasitas 0,8 liter", "Lengkap dengan 3 fitur", "Memanaskan makanan"],
        },
        {
            id: 7,
            name: "KitchenAid Artisan",
            image: "../aset/7.webp",
            price: "Rp.14.779.000",
            desc: ["Stand Mixer", "Untuk membuat roti, cake, kue", "Made in USA", "Garansi 3 tahun", "Daya Listrik : 220V, 50Hz, 300 Watt", "Kapasitas Bowl : 4,8 Liter"]
        },
        {
            id: 8,
            name: "Oral-B Io Series 6 Pink",
            image: "../aset/8.webp",
            price: "Rp.3.800.000",
            desc: ["The Oral-B iO 6", "Series Electric Toothbrush combines powerful", "Gosok gigi"],
        },
        {
            id: 9,
            name: "Mecoo Low Carbo Rice Cooker",
            image: "../aset/9.webp",
            price: "Rp.875.000",
            desc: ["Garansi Ganti Baru Garansi Resmi 1 tahun (mesin)", "Dengan kapasitas 1.8L", "- Extra Keep Warm up to 48 hours", "BPA-Free PFOA-Free Teflon-Free", "Keunggulan: Ultra Warmth - Extra Keep Warm"],
        },
        {
            id: 10,
            name: "Toaster/4 Slices/Smeg/Pink",
            image: "../aset/10.webp",
            price: "Rp.5.861.000",
            desc: ["pemanggang roti SMEG menggabungkan ergonomi, fungsionalitas, dan keseimbangan estetika", "Sarapan, makan siang, atau kudapan", "SMEG 50-an style toaster", "Fitur : 2 slot ekstra lebar (masing-masing 36mm) 6 tingkat kecoklatan 3 pra program", "-set : Reheat, Defrost, Bagel Rak pemusatan otomatis Pop-up otomatis "],
        },
    ];

    const productContainer = document.querySelector('.product-list');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productCard.appendChild(productImage);

        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productCard.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;
        productCard.appendChild(productPrice);

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Beli';
        buyButton.addEventListener('click', () => {
            alert('Pesanan anda sedang di proses');
        });
        productCard.appendChild(buyButton);

        productContainer.appendChild(productCard);
    });
});

