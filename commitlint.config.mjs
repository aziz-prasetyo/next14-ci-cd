export default {
  extends: [],
  rules: {
    'header-min-length': [2, 'always', 10],
    'header-case-title-case': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'header-case-title-case': ({ raw }) => {
          return [
            /^[A-Z]/.test(raw),
            'Pesan komit harus ditulis dengan kaidah penulisan judul.',
          ];
        },
      },
    },
  ],
};
