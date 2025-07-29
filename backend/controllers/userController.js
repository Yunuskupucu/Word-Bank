export const getProfile = (req, res) => {
  const { username } = req.user; // JWT'den gelen veriyi al

  res.json({
    message: 'Profil bilgileri',
    user: {
      username,
    },
  });
};
