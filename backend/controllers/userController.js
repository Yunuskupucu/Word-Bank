export const getProfile = (req, res) => {
  const { username } = req.user; // JWT'den gelen veri

  res.json({
    message: 'Profil bilgileri',
    user: {
      username,
    },
  });
};
