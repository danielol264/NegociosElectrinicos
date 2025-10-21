window.DB = {
    categories: [

    // ===============================
    // COMPONENTES
    // ===============================
    {
    id: 'componentes',
    name: 'Componentes',
    filters: {
        tipo: ['Ventilador', 'Pasta térmica', 'Adaptador', 'Cables SATA', 'Brackets', 'Hub USB', 'Extensión PCIe'],
        marca: ['Cooler Master', 'DeepCool', 'Thermaltake', 'Noctua', 'Corsair', 'Arctic']
        },
    items: [
        { id: 1, brand: 'Cooler Master', model: 'Hyper 212', tipo: 'Ventilador', price: 799 },
        { id: 2, brand: 'DeepCool', model: 'AK400', tipo: 'Ventilador', price: 749 },
        { id: 3, brand: 'Thermaltake', model: 'TG-30', tipo: 'Pasta térmica', price: 249 },
        { id: 4, brand: 'Noctua', model: 'NT-H1', tipo: 'Pasta térmica', price: 329 },
        { id: 5, brand: 'Corsair', model: 'iCUE Commander Core', tipo: 'Hub USB', price: 999 },
        { id: 6, brand: 'Arctic', model: 'MX-6', tipo: 'Pasta térmica', price: 269 },
        { id: 7, brand: 'DeepCool', model: 'FH-10', tipo: 'Hub USB', price: 399 },
        { id: 8, brand: 'Cooler Master', model: 'ARGB Splitter', tipo: 'Adaptador', price: 159 },
        { id: 9, brand: 'Thermaltake', model: 'PCIe 4.0 Extender', tipo: 'Extensión PCIe', price: 899 },
        { id: 10, brand: 'Noctua', model: 'NF-A12x25', tipo: 'Ventilador', price: 699 },
        { id: 11, brand: 'Corsair', model: 'RGB Lighting Hub', tipo: 'Hub USB', price: 499 },
        { id: 12, brand: 'DeepCool', model: 'RGB Controller', tipo: 'Adaptador', price: 189 },
        { id: 13, brand: 'Cooler Master', model: 'Bracket GPU', tipo: 'Brackets', price: 299 },
        { id: 14, brand: 'Arctic', model: 'F12 PWM', tipo: 'Ventilador', price: 199 },
        { id: 15, brand: 'Noctua', model: 'Chromax NA-HC7', tipo: 'Brackets', price: 349 },
        { id: 16, brand: 'Thermaltake', model: 'TT Premium PCIe Cable', tipo: 'Extensión PCIe', price: 699 },
        { id: 17, brand: 'Corsair', model: 'Cable SATA Pro', tipo: 'Cables SATA', price: 129 },
        { id: 18, brand: 'DeepCool', model: 'ARGB 1-to-3 Splitter', tipo: 'Adaptador', price: 99 },
        { id: 19, brand: 'Cooler Master', model: 'Thermal Pad', tipo: 'Pasta térmica', price: 259 },
        { id: 20, brand: 'Noctua', model: 'NA-SAV2', tipo: 'Brackets', price: 229 }
        ]
    },

    // ===============================
    // DISCOS DUROS / SSD / NAS
    // ===============================
    {
    id: 'DiscoDuro',
    name: 'Discos Duros / SSD / NAS',
    filters: {
        tipo: ['SSD', 'HDD', 'NVMe', 'NAS'],
        capacidad: ['240GB', '500GB', '1TB', '2TB', '4TB', '8TB'],
        marca: ['Kingston', 'Western Digital', 'Seagate', 'Samsung', 'Crucial']
        },
    items: [
        { id: 1, brand: 'Kingston', model: 'A400', tipo: 'SSD', capacidad: '480GB', price: 699 },
        { id: 2, brand: 'Western Digital', model: 'Blue', tipo: 'HDD', capacidad: '1TB', price: 999 },
        { id: 3, brand: 'Samsung', model: '970 EVO Plus', tipo: 'NVMe', capacidad: '1TB', price: 1899 },
        { id: 4, brand: 'Seagate', model: 'Barracuda', tipo: 'HDD', capacidad: '2TB', price: 1299 },
        { id: 5, brand: 'Crucial', model: 'MX500', tipo: 'SSD', capacidad: '500GB', price: 849 },
        { id: 6, brand: 'Kingston', model: 'NV2', tipo: 'NVMe', capacidad: '1TB', price: 1199 },
        { id: 7, brand: 'Samsung', model: '870 QVO', tipo: 'SSD', capacidad: '2TB', price: 2299 },
        { id: 8, brand: 'Seagate', model: 'IronWolf', tipo: 'NAS', capacidad: '4TB', price: 2899 },
        { id: 9, brand: 'Western Digital', model: 'Red Plus', tipo: 'NAS', capacidad: '4TB', price: 2799 },
        { id: 10, brand: 'Crucial', model: 'P3 Plus', tipo: 'NVMe', capacidad: '2TB', price: 1999 },
        { id: 11, brand: 'Kingston', model: 'KC3000', tipo: 'NVMe', capacidad: '2TB', price: 2599 },
        { id: 12, brand: 'Samsung', model: '980 PRO', tipo: 'NVMe', capacidad: '1TB', price: 2199 },
        { id: 13, brand: 'Seagate', model: 'Exos X16', tipo: 'HDD', capacidad: '8TB', price: 4999 },
        { id: 14, brand: 'Western Digital', model: 'Black SN850X', tipo: 'NVMe', capacidad: '2TB', price: 2699 },
        { id: 15, brand: 'Crucial', model: 'BX500', tipo: 'SSD', capacidad: '240GB', price: 499 },
        { id: 16, brand: 'Kingston', model: 'FURY Renegade', tipo: 'NVMe', capacidad: '1TB', price: 2399 },
        { id: 17, brand: 'Samsung', model: 'T7 Portable', tipo: 'SSD', capacidad: '1TB', price: 2599 },
        { id: 18, brand: 'Seagate', model: 'One Touch', tipo: 'HDD', capacidad: '5TB', price: 2799 },
        { id: 19, brand: 'Western Digital', model: 'Elements', tipo: 'HDD', capacidad: '2TB', price: 1499 },
        { id: 20, brand: 'Crucial', model: 'X9 Pro', tipo: 'SSD', capacidad: '1TB', price: 1899 }
        ]
    },

    // ===============================
    // MEMORIAS RAM Y FLASH
    // ===============================
    {
    id: 'MemoriaRam',
    name: 'Memorias RAM y Flash',
    filters: {
        tipo: ['DDR3', 'DDR4', 'DDR5', 'USB', 'MicroSD'],
        capacidad: ['4GB', '8GB', '16GB', '32GB', '64GB'],
        marca: ['Corsair', 'Kingston', 'Crucial', 'ADATA', 'PNY']
        },
    items: [
        { id: 1, brand: 'Corsair', model: 'Vengeance LPX', tipo: 'DDR4', capacidad: '8GB', price: 649 },
        { id: 2, brand: 'Kingston', model: 'Fury Beast', tipo: 'DDR4', capacidad: '16GB', price: 999 },
        { id: 3, brand: 'Crucial', model: 'Ballistix', tipo: 'DDR4', capacidad: '8GB', price: 849 },
        { id: 4, brand: 'ADATA', model: 'Premier', tipo: 'DDR3', capacidad: '4GB', price: 399 },
        { id: 5, brand: 'PNY', model: 'XLR8 Gaming', tipo: 'DDR5', capacidad: '16GB', price: 1399 },
        { id: 6, brand: 'Corsair', model: 'Vengeance RGB Pro', tipo: 'DDR4', capacidad: '32GB', price: 2499 },
        { id: 7, brand: 'Kingston', model: 'DataTraveler Exodia', tipo: 'USB', capacidad: '64GB', price: 199 },
        { id: 8, brand: 'ADATA', model: 'UV128', tipo: 'USB', capacidad: '32GB', price: 99 },
        { id: 9, brand: 'PNY', model: 'Elite-X', tipo: 'MicroSD', capacidad: '128GB', price: 299 },
        { id: 10, brand: 'Crucial', model: 'DDR5 4800', tipo: 'DDR5', capacidad: '32GB', price: 2799 },
        { id: 11, brand: 'Corsair', model: 'Vengeance LPX', tipo: 'DDR3', capacidad: '8GB', price: 449 },
        { id: 12, brand: 'Kingston', model: 'Fury Renegade', tipo: 'DDR5', capacidad: '32GB', price: 3299 },
        { id: 13, brand: 'ADATA', model: 'XPG D10', tipo: 'DDR4', capacidad: '16GB', price: 1099 },
        { id: 14, brand: 'PNY', model: 'Turbo Attaché', tipo: 'USB', capacidad: '128GB', price: 249 },
        { id: 15, brand: 'Crucial', model: 'DDR4 3200', tipo: 'DDR4', capacidad: '8GB', price: 599 },
        { id: 16, brand: 'Kingston', model: 'Canvas Go!', tipo: 'MicroSD', capacidad: '64GB', price: 189 },
        { id: 17, brand: 'ADATA', model: 'Premier Pro', tipo: 'DDR5', capacidad: '16GB', price: 1699 },
        { id: 18, brand: 'PNY', model: 'Performance DDR4', tipo: 'DDR4', capacidad: '8GB', price: 649 },
        { id: 19, brand: 'Corsair', model: 'Dominator Platinum', tipo: 'DDR5', capacidad: '32GB', price: 3799 },
        { id: 20, brand: 'Crucial', model: 'DDR3L 1600', tipo: 'DDR3', capacidad: '8GB', price: 499 }
        ]
    },

    // ===============================
    // MONITORES
    // ===============================
    {
    id: 'Monitores',
    name: 'Monitores',
    filters: {
        marcas: ['Samsung', 'LG', 'AOC', 'ASUS', 'Dell'],
        resoluciones: ['1080p', '1440p', '4K'],
        tamanos: ['21"', '24"', '27"', '32"'],
        refresco: ['60Hz', '75Hz', '144Hz', '240Hz']
        },
    items: [
        { id: 1, brand: 'Samsung', model: 'S24R350', size: '24"', resolution: '1080p', refresh: '75Hz', price: 3599 },
        { id: 2, brand: 'LG', model: '27QN600', size: '27"', resolution: '1440p', refresh: '75Hz', price: 6999 },
        { id: 3, brand: 'AOC', model: 'U2790VQ', size: '27"', resolution: '4K', refresh: '60Hz', price: 8999 },
        { id: 4, brand: 'ASUS', model: 'VG249Q1A', size: '24"', resolution: '1080p', refresh: '165Hz', price: 4799 },
        { id: 5, brand: 'Dell', model: 'S2721D', size: '27"', resolution: '1440p', refresh: '75Hz', price: 6399 },
        { id: 6, brand: 'Samsung', model: 'Odyssey G3', size: '27"', resolution: '1080p', refresh: '144Hz', price: 7299 },
        { id: 7, brand: 'LG', model: 'UltraFine 4K', size: '27"', resolution: '4K', refresh: '60Hz', price: 11999 },
        { id: 8, brand: 'AOC', model: '24G2SPU', size: '24"', resolution: '1080p', refresh: '165Hz', price: 4999 },
        { id: 9, brand: 'ASUS', model: 'TUF VG27AQ', size: '27"', resolution: '1440p', refresh: '165Hz', price: 8999 },
        { id: 10, brand: 'Dell', model: 'G3223Q', size: '32"', resolution: '4K', refresh: '144Hz', price: 13999 },
        { id: 11, brand: 'Samsung', model: 'Odyssey G5', size: '32"', resolution: '1440p', refresh: '144Hz', price: 10299 },
        { id: 12, brand: 'LG', model: '24MP60G', size: '24"', resolution: '1080p', refresh: '75Hz', price: 3499 },
        { id: 13, brand: 'AOC', model: 'CQ32G1', size: '32"', resolution: '1440p', refresh: '144Hz', price: 8999 },
        { id: 14, brand: 'ASUS', model: 'ProArt PA278QV', size: '27"', resolution: '1440p', refresh: '75Hz', price: 7799 },
        { id: 15, brand: 'Dell', model: 'P2419H', size: '24"', resolution: '1080p', refresh: '60Hz', price: 2999 },
        { id: 16, brand: 'Samsung', model: 'Smart M5', size: '27"', resolution: '1080p', refresh: '60Hz', price: 5999 },
        { id: 17, brand: 'LG', model: 'UltraGear 27GP850', size: '27"', resolution: '1440p', refresh: '165Hz', price: 9999 },
        { id: 18, brand: 'AOC', model: 'CU34G2X', size: '34"', resolution: '1440p', refresh: '144Hz', price: 11999 },
        { id: 19, brand: 'ASUS', model: 'ROG Swift PG32UQ', size: '32"', resolution: '4K', refresh: '144Hz', price: 21999 },
        { id: 20, brand: 'Dell', model: 'UltraSharp U2720Q', size: '27"', resolution: '4K', refresh: '60Hz', price: 16999 }
        ]
    },
        // ===============================
    // TARJETAS DE VIDEO
    // ===============================
    {
    id: 'Tarjetasvideo',
    name: 'Tarjetas de Video',
    filters: {
        marca: ['NVIDIA', 'AMD'],
        modelo: ['RTX 3060', 'RTX 3070', 'RTX 3080', 'RX 6600', 'RX 6700 XT', 'RX 7900 XTX'],
        memoria: ['8GB', '10GB', '12GB', '16GB', '24GB']
        },
    items: [
        { id: 1, brand: 'NVIDIA', model: 'RTX 3060', memoria: '12GB', price: 8999 },
        { id: 2, brand: 'NVIDIA', model: 'RTX 3070', memoria: '8GB', price: 11499 },
        { id: 3, brand: 'NVIDIA', model: 'RTX 3080', memoria: '10GB', price: 14999 },
        { id: 4, brand: 'AMD', model: 'RX 6600', memoria: '8GB', price: 7999 },
        { id: 5, brand: 'AMD', model: 'RX 6700 XT', memoria: '12GB', price: 11499 },
        { id: 6, brand: 'AMD', model: 'RX 7900 XTX', memoria: '24GB', price: 24999 },
        { id: 7, brand: 'NVIDIA', model: 'RTX 4060', memoria: '8GB', price: 10299 },
        { id: 8, brand: 'NVIDIA', model: 'RTX 4070', memoria: '12GB', price: 15999 },
        { id: 9, brand: 'NVIDIA', model: 'RTX 4090', memoria: '24GB', price: 34999 },
        { id: 10, brand: 'AMD', model: 'RX 7600', memoria: '8GB', price: 9999 },
        { id: 11, brand: 'AMD', model: 'RX 7800 XT', memoria: '16GB', price: 16999 },
        { id: 12, brand: 'NVIDIA', model: 'RTX 3050', memoria: '8GB', price: 6999 },
        { id: 13, brand: 'NVIDIA', model: 'RTX 4070 Ti', memoria: '12GB', price: 18999 },
        { id: 14, brand: 'AMD', model: 'RX 6750 XT', memoria: '12GB', price: 12499 },
        { id: 15, brand: 'NVIDIA', model: 'RTX 3080 Ti', memoria: '12GB', price: 18999 },
        { id: 16, brand: 'AMD', model: 'RX 6950 XT', memoria: '16GB', price: 17999 },
        { id: 17, brand: 'NVIDIA', model: 'RTX 4080', memoria: '16GB', price: 26999 },
        { id: 18, brand: 'AMD', model: 'RX 7900 XT', memoria: '20GB', price: 21999 },
        { id: 19, brand: 'NVIDIA', model: 'GTX 1660 Super', memoria: '6GB', price: 5999 },
        { id: 20, brand: 'AMD', model: 'RX 550', memoria: '4GB', price: 2999 }
        ]
    },

    // ===============================
    // FUENTES DE PODER
    // ===============================
    {
    id: 'FuentesPoder',
    name: 'Fuentes de Poder',
    filters: {
        potencia: ['450W', '550W', '650W', '750W', '850W', '1000W'],
        certificacion: ['80+ White', '80+ Bronze', '80+ Gold', '80+ Platinum'],
        marca: ['EVGA', 'Corsair', 'Thermaltake', 'Cooler Master', 'Gigabyte']
        },
    items: [
        { id: 1, brand: 'EVGA', model: '450 BR', potencia: '450W', certificacion: '80+ Bronze', price: 799 },
        { id: 2, brand: 'Corsair', model: 'CV550', potencia: '550W', certificacion: '80+ Bronze', price: 899 },
        { id: 3, brand: 'Thermaltake', model: 'Smart 600W', potencia: '600W', certificacion: '80+ White', price: 899 },
        { id: 4, brand: 'Cooler Master', model: 'MWE Gold 650', potencia: '650W', certificacion: '80+ Gold', price: 1299 },
        { id: 5, brand: 'Gigabyte', model: 'P750GM', potencia: '750W', certificacion: '80+ Gold', price: 1499 },
        { id: 6, brand: 'EVGA', model: '600 GD', potencia: '600W', certificacion: '80+ Gold', price: 1099 },
        { id: 7, brand: 'Corsair', model: 'RM750x', potencia: '750W', certificacion: '80+ Gold', price: 1699 },
        { id: 8, brand: 'Thermaltake', model: 'Toughpower GF1', potencia: '850W', certificacion: '80+ Gold', price: 1899 },
        { id: 9, brand: 'Cooler Master', model: 'V850', potencia: '850W', certificacion: '80+ Platinum', price: 2299 },
        { id: 10, brand: 'Gigabyte', model: 'UD1000GM', potencia: '1000W', certificacion: '80+ Gold', price: 2499 },
        { id: 11, brand: 'Corsair', model: 'RM1000e', potencia: '1000W', certificacion: '80+ Gold', price: 2599 },
        { id: 12, brand: 'EVGA', model: 'SuperNOVA 850 P2', potencia: '850W', certificacion: '80+ Platinum', price: 2699 },
        { id: 13, brand: 'Thermaltake', model: 'Smart RGB 700W', potencia: '700W', certificacion: '80+ White', price: 1099 },
        { id: 14, brand: 'Cooler Master', model: 'GX 550', potencia: '550W', certificacion: '80+ Bronze', price: 999 },
        { id: 15, brand: 'Gigabyte', model: 'P550B', potencia: '550W', certificacion: '80+ Bronze', price: 899 },
        { id: 16, brand: 'EVGA', model: '500 W1', potencia: '500W', certificacion: '80+ White', price: 749 },
        { id: 17, brand: 'Corsair', model: 'CX650M', potencia: '650W', certificacion: '80+ Bronze', price: 1099 },
        { id: 18, brand: 'Thermaltake', model: 'Toughpower 1200W', potencia: '1200W', certificacion: '80+ Platinum', price: 3499 },
        { id: 19, brand: 'Cooler Master', model: 'V650 Gold', potencia: '650W', certificacion: '80+ Gold', price: 1399 },
        { id: 20, brand: 'Gigabyte', model: 'P1000GM', potencia: '1000W', certificacion: '80+ Gold', price: 2399 }
        ]
    },

    // ===============================
    // GABINETES
    // ===============================
    {
    id: 'Gabinetes',
    name: 'Gabinetes',
    filters: {
        formato: ['ATX', 'Micro-ATX', 'Mini-ITX'],
        color: ['Negro', 'Blanco', 'Rojo', 'Azul'],
        marca: ['NZXT', 'Cooler Master', 'Corsair', 'Thermaltake', 'Lian Li']
    },
    items: [
        { id: 1, brand: 'NZXT', model: 'H510', formato: 'ATX', color: 'Negro', price: 1399 },
        { id: 2, brand: 'Cooler Master', model: 'NR200', formato: 'Mini-ITX', color: 'Blanco', price: 1299 },
        { id: 3, brand: 'Corsair', model: '4000D Airflow', formato: 'ATX', color: 'Negro', price: 1599 },
        { id: 4, brand: 'Thermaltake', model: 'V200 TG', formato: 'ATX', color: 'Azul', price: 1499 },
        { id: 5, brand: 'Lian Li', model: 'Lancool II', formato: 'ATX', color: 'Blanco', price: 1799 },
        { id: 6, brand: 'NZXT', model: 'H5 Flow', formato: 'ATX', color: 'Negro', price: 1699 },
        { id: 7, brand: 'Cooler Master', model: 'TD300 Mesh', formato: 'Micro-ATX', color: 'Blanco', price: 1399 },
        { id: 8, brand: 'Corsair', model: 'iCUE 5000X', formato: 'ATX', color: 'Blanco', price: 2599 },
        { id: 9, brand: 'Thermaltake', model: 'Core P3', formato: 'ATX', color: 'Negro', price: 2199 },
        { id: 10, brand: 'Lian Li', model: 'O11 Dynamic', formato: 'ATX', color: 'Negro', price: 2499 },
        { id: 11, brand: 'NZXT', model: 'H7 Flow', formato: 'ATX', color: 'Blanco', price: 1999 },
        { id: 12, brand: 'Cooler Master', model: 'MasterBox Q300L', formato: 'Micro-ATX', color: 'Negro', price: 999 },
        { id: 13, brand: 'Corsair', model: '275R Airflow', formato: 'ATX', color: 'Negro', price: 1299 },
        { id: 14, brand: 'Thermaltake', model: 'S100 TG', formato: 'Micro-ATX', color: 'Blanco', price: 1099 },
        { id: 15, brand: 'Lian Li', model: 'PC-O11 Air Mini', formato: 'Micro-ATX', color: 'Negro', price: 1799 },
        { id: 16, brand: 'NZXT', model: 'H510 Elite', formato: 'ATX', color: 'Blanco', price: 2299 },
        { id: 17, brand: 'Cooler Master', model: 'HAF 500', formato: 'ATX', color: 'Negro', price: 1899 },
        { id: 18, brand: 'Corsair', model: '5000D RGB', formato: 'ATX', color: 'Blanco', price: 2699 },
        { id: 19, brand: 'Thermaltake', model: 'View 51', formato: 'ATX', color: 'Negro', price: 2799 },
        { id: 20, brand: 'Lian Li', model: 'V3000 Plus', formato: 'ATX', color: 'Negro', price: 3999 }
        ]
    },

    // ===============================
    // TARJETAS MADRE
    // ===============================
    {
    id: 'TarjetasMadre',
    name: 'Tarjetas Madre',
    filters: {
        socket: ['AM4', 'AM5', 'LGA1200', 'LGA1700'],
        chipset: ['B450', 'B550', 'X570', 'Z590', 'Z690', 'Z790'],
        marca: ['ASUS', 'Gigabyte', 'MSI', 'ASRock']
        },
    items: [
        { id: 1, brand: 'ASUS', model: 'TUF B550M', socket: 'AM4', chipset: 'B550', price: 2899 },
        { id: 2, brand: 'Gigabyte', model: 'Z690 Aorus Elite', socket: 'LGA1700', chipset: 'Z690', price: 4999 },
        { id: 3, brand: 'MSI', model: 'B450 Tomahawk', socket: 'AM4', chipset: 'B450', price: 2499 },
        { id: 4, brand: 'ASRock', model: 'X570 Phantom Gaming', socket: 'AM4', chipset: 'X570', price: 3299 },
        { id: 5, brand: 'ASUS', model: 'ROG Strix B650E', socket: 'AM5', chipset: 'B650', price: 4699 },
        { id: 6, brand: 'Gigabyte', model: 'Z790 Aorus Master', socket: 'LGA1700', chipset: 'Z790', price: 6999 },
        { id: 7, brand: 'MSI', model: 'MAG B550 TOMAHAWK', socket: 'AM4', chipset: 'B550', price: 2899 },
        { id: 8, brand: 'ASRock', model: 'B660 Steel Legend', socket: 'LGA1700', chipset: 'B660', price: 3499 },
        { id: 9, brand: 'ASUS', model: 'Prime Z590-A', socket: 'LGA1200', chipset: 'Z590', price: 3899 },
        { id: 10, brand: 'Gigabyte', model: 'B450M DS3H', socket: 'AM4', chipset: 'B450', price: 1999 },
        { id: 11, brand: 'MSI', model: 'PRO Z790-P', socket: 'LGA1700', chipset: 'Z790', price: 4599 },
        { id: 12, brand: 'ASRock', model: 'X670E Taichi', socket: 'AM5', chipset: 'X670E', price: 7499 },
        { id: 13, brand: 'ASUS', model: 'TUF Z690-PLUS', socket: 'LGA1700', chipset: 'Z690', price: 5199 },
        { id: 14, brand: 'Gigabyte', model: 'X570 Aorus Elite', socket: 'AM4', chipset: 'X570', price: 3399 },
        { id: 15, brand: 'MSI', model: 'B650M Mortar', socket: 'AM5', chipset: 'B650', price: 4299 },
        { id: 16, brand: 'ASRock', model: 'B450 Pro4', socket: 'AM4', chipset: 'B450', price: 1899 },
        { id: 17, brand: 'ASUS', model: 'ROG Strix X670E-F', socket: 'AM5', chipset: 'X670E', price: 7499 },
        { id: 18, brand: 'Gigabyte', model: 'Z590 Vision G', socket: 'LGA1200', chipset: 'Z590', price: 3799 },
        { id: 19, brand: 'MSI', model: 'MEG Z690 ACE', socket: 'LGA1700', chipset: 'Z690', price: 7899 },
        { id: 20, brand: 'ASRock', model: 'B550 Phantom Gaming', socket: 'AM4', chipset: 'B550', price: 2999 }
        ]
    },
  ],}