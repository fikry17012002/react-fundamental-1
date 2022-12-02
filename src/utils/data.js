let catatans = [
    {
      id: 'catatans-1',
      name: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      createdAt: '2021-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 'catatans-2',
      name: "Functional Component",
      body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
      createdAt: '2020-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 'catatans-5',
      name: "Modularization",
      body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 'catatans-6',
      name: "Lifecycle",
      body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 'catatans-7',
      name: "ESM",
      body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
      createdAt: '2020-04-14T04:27:34.572Z',
      archived: true,
    },
    {
      id: 'catatans-8',
      name: "Module Bundler",
      body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
      createdAt: '2021-04-14T04:27:34.572Z',
      archived: true,
    },
  ];


  function getCatatans() {
    return catatans;
  }

  function getCatatan(id) {
    const foundedCatatan = catatans.find((catatan) => catatan.id === id);
    return foundedCatatan;
  }
   
  function addCatatan({name, body}) {
    catatans = [...catatans, 
      {
        id: `catatans-${+new Date()}`, 
        name: name || '(untitled)',
        body,
        archived: false,
     createdAt: new Date().toISOString(),
      },];
  }
   
  function deleteCatatan(id) {
    catatans = catatans.filter((catatan) => catatan.id !== id);
  }
  
  const showFormatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
  }
  
  export { getCatatan, getCatatans, addCatatan, deleteCatatan, showFormatDate };
  