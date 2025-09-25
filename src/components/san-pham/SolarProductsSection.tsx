'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductSpecs {
  [key: string]: string;
}

interface Product {
  id: string;
  name: string;
  image: string;
  tags: string[];
  specs: ProductSpecs;
  category: 'solar' | 'inverter' | 'battery';
}

const SolarProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const products: Product[] = [
    {
      id: 'ja-solar-600w',
      name: 'TẤM QUANG NĂNG - JA Solar 600Wp',
      image: 'https://images.slmglobal.vn/storage/v1/object/sign/solarmax/01_Tam_PV/01_JA%20Solar/Anh%20JA%20Solar.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2xhcm1heC8wMV9UYW1fUFYvMDFfSkEgU29sYXIvQW5oIEpBIFNvbGFyLmpwZyIsImlhdCI6MTc1NjIwNzU1NCwiZXhwIjoxNzg3NzQzNTU0fQ.4oPGqLpGF-6N8rbMqsU7KiyTGIK5iPH22EbyqwEEgQA&t=2025-08-26T11%3A25%3A55.142Z',
      tags: ['N-Type', '600W'],
      specs: {
        'Kích thước': '1134x2278mm',
        'Bảo hành': '12 năm'
      },
      category: 'solar'
    },
    {
      id: 'solis-hybrid-3p-10k',
      name: 'INVERTER SOLIS S6-EH3P-10K02-NV-YD-L',
      image: 'https://images.slmglobal.vn/storage/v1/object/sign/solarmax/02_Inverter/03_Solis%20Hybrid%203%20pha%20AT/Anh%20Solis_Hybrid_3P_Apthap_10kW.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2xhcm1heC8wMl9JbnZlcnRlci8wM19Tb2xpcyBIeWJyaWQgMyBwaGEgQVQvQW5oIFNvbGlzX0h5YnJpZF8zUF9BcHRoYXBfMTBrVy5wbmciLCJpYXQiOjE3NTYyMDc4NTAsImV4cCI6MTc4Nzc0Mzg1MH0.lF41iLqphC1ETvXjM_wjlgB4EkvmeeAa6n5xSMwzHhU&t=2025-08-26T11%3A30%3A50.810Z',
      tags: ['Hybrid', '3 pha áp thấp'],
      specs: {
        'Công suất AC': '10kW',
        'Công suất DC max': '20kW',
        'Bảo hành': '5 năm'
      },
      category: 'inverter'
    },
    {
      id: 'invt-3p-15k',
      name: 'INVERTER INVT 3P-XG15KTR1-S',
      image: 'https://images.slmglobal.vn/storage/v1/object/sign/solarmax/02_Inverter/07_INVT%20Ongrid%203%20pha/Anh_Invt_Ongrid_3P_10kw-15kw-20kw_40kw.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2xhcm1heC8wMl9JbnZlcnRlci8wN19JTlZUIE9uZ3JpZCAzIHBoYS9BbmhfSW52dF9PbmdyaWRfM1BfMTBrdy0xNWt3LTIwa3dfNDBrdy5qcGciLCJpYXQiOjE3NTYxODk3NzUsImV4cCI6MTc4NzcyNTc3NX0.DAjXHf5LNQauKVCsL2FKtkoaCZZJpFjLAGtlV1SCPdk&t=2025-08-26T06%3A29%3A35.214Z',
      tags: ['Ongrid', '3 pha'],
      specs: {
        'Công suất AC': '15kW',
        'Công suất DC max': '24kW',
        'Bảo hành': '5 năm'
      },
      category: 'inverter'
    },
    {
      id: 'invt-1p-10k',
      name: 'INVERTER INVT 1P-XG10KTL',
      image: 'https://images.slmglobal.vn/storage/v1/object/sign/solarmax/02_Inverter/06_INVT%20Ongrid%201%20pha/Anh_Invt_Ongrid_1P_5kw-10kw.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2xhcm1heC8wMl9JbnZlcnRlci8wNl9JTlZUIE9uZ3JpZCAxIHBoYS9BbmhfSW52dF9PbmdyaWRfMVBfNWt3LTEwa3cuanBnIiwiaWF0IjoxNzU2MTg5MDExLCJleHAiOjE3ODc3MjUwMTF9.g7Y_X94zxrXK3jWE1CK2aA_DHJ6u5l-YG4aMDFVVdV4&t=2025-08-26T06%3A16%3A51.941Z',
      tags: ['Ongrid', '1 pha'],
      specs: {
        'Công suất AC': '10kW',
        'Công suất DC max': '15kW',
        'Bảo hành': '5 năm'
      },
      category: 'inverter'
    },
    {
      id: 'solis-1p-5k',
      name: 'INVERTER SOLIS S6-EH1P5K-L',
      image: 'https://images.slmglobal.vn/storage/v1/object/sign/solarmax/02_Inverter/01_Solis%20Hybrid%201%20pha/Anh_Solis_1P.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2xhcm1heC8wMl9JbnZlcnRlci8wMV9Tb2xpcyBIeWJyaWQgMSBwaGEvQW5oX1NvbGlzXzFQLnBuZyIsImlhdCI6MTc1NjIwODIyMywiZXhwIjoxNzg3NzQ0MjIzfQ.Y_1D4uP_QOa-GffONHOv1zyCmxaf39cY3EuRkoo21Bw&t=2025-08-26T11%3A37%3A04.106Z',
      tags: ['Hybrid', '1 pha'],
      specs: {
        'Công suất AC': '5kW',
        'Công suất DC max': '10kW',
        'Bảo hành': '5 năm'
      },
      category: 'inverter'
    },
    {
      id: 'dyness-powerbrick',
      name: 'PIN LITHIUM - DYNESS - POWERBRICK',
      image: 'https://images.slmglobal.vn/storage/v1/object/sign/solarmax/03_Pin_Lithium/02_Dyness/Anh_Dyness_PowerBrick_14.336kW.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2xhcm1heC8wM19QaW5fTGl0aGl1bS8wMl9EeW5lc3MvQW5oX0R5bmVzc19Qb3dlckJyaWNrXzE0LjMzNmtXLnBuZyIsImlhdCI6MTc1NjE5MjEzNSwiZXhwIjoxNzg3NzI4MTM1fQ.1_k5pvHo-Rjfs2sel_Uuvi2uNUyBGl_F_JrvllJLMKg&t=2025-08-26T07%3A08%3A55.587Z',
      tags: [],
      specs: {
        'Dung lượng': '14.336kWh',
        'Bảo hành': '5 năm'
      },
      category: 'battery'
    },
    {
      id: 'dyness-dl5c',
      name: 'PIN LITHIUM - Dyness - DL5.0C',
      image: 'https://images.slmglobal.vn/storage/v1/object/sign/solarmax/03_Pin_Lithium/02_Dyness/Anh_Dyness_BX_5.12kw.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2xhcm1heC8wM19QaW5fTGl0aGl1bS8wMl9EeW5lc3MvQW5oX0R5bmVzc19CWF81LjEya3cucG5nIiwiaWF0IjoxNzU2MTkxNzQ4LCJleHAiOjE3ODc3Mjc3NDh9.LsXjUDjPX_h1uM9IIqYAEJkcZH8JnpQ6hG2Qz2rjAv4&t=2025-08-26T07%3A02%3A28.382Z',
      tags: [],
      specs: {
        'Dung lượng': '5.12kWh',
        'Bảo hành': '5 năm'
      },
      category: 'battery'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả sản phẩm' },
    { id: 'solar', name: 'Tấm quang năng' },
    { id: 'inverter', name: 'Biến tần' },
    { id: 'battery', name: 'Pin Lithium' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50/50">
      <div className="max-w-7xl mx-auto">

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-3 text-sm font-semibold rounded-full border transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-200 hover:text-emerald-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group h-full flex flex-col"
            >
              
              {/* Product Image - Fixed Height */}
              <div className="relative h-64 bg-slate-50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Tags - Positioned absolutely */}
                {product.tags.length > 0 && (
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info - Flex grow to fill remaining space */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Product Name - Fixed Height */}
                <h3 className="font-bold text-slate-900 mb-4 text-base leading-tight h-12 flex items-start">
                  {product.name}
                </h3>

                {/* Specifications - Flex grow */}
                <div className="space-y-3 mb-6 flex-grow">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-1 border-b border-slate-100 last:border-b-0">
                      <span className="text-slate-500 text-sm font-medium">{key}:</span>
                      <span className="text-slate-900 font-semibold text-sm">{value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Fixed at bottom */}
                <button className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors duration-200 shadow-sm">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 border border-slate-200 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Cần tư vấn về giải pháp năng lượng mặt trời?
            </h3>
            <p className="text-slate-600 mb-8 text-lg">
              Liên hệ với chúng tôi để được tư vấn miễn phí và báo giá tốt nhất
            </p>
            <button className="px-10 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors duration-200 shadow-lg">
              Liên hệ tư vấn ngay
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SolarProductsSection;