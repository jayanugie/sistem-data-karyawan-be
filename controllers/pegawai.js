const { Pegawai } = require("../models");

// ambil semua pegawai
const getPegawai = (req, res) => {
  Pegawai.findAll({
    order: [["id", "DESC"]],
  })
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch(() => {
      return res.status(500).json({
        message: "Failed to load data",
      });
    });
};

// create data pegawai
const createPegawai = async (req, res) => {
  const nama = req.body.nama;
  const jabatan = req.body.jabatan;
  const kontrak = req.body.kontrak;

  const data = await Pegawai.create({
    nama: nama,
    jabatan: jabatan,
    kontrak: kontrak,
  });

  return res.status(200).json({
    message: "Pegawai berhasil ditambahkan",
  });
};

// delete data pegawai
const deletePegawai = (req, res) => {
  Pegawai.destroy({
    where: { id: req.params.id },
  }).then(() => {
    return res.status(200).json({
      message: "Pegawai berhasil dihapus",
    });
  });
};

// update pegawai
const updatePegawai = (req, res) => {
  Pegawai.update(
    {
      nama: req.body.nama,
      jabatan: req.body.jabatan,
      kontrak: req.body.kontrak,
    },
    {
      where: { id: req.params.id },
    }
  ).then(() => {
    return res.status(200).json({
      message: "Update successful",
    });
  });
};

module.exports = {
  getPegawai,
  createPegawai,
  deletePegawai,
  updatePegawai,
};
