const config = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+-\d+)\s(\w+):\s(.+)$/,
      headerCorrespondence: ['ticket', 'type', 'subject'],
    },
  },
  rules: {
    'header-match-team-pattern': [2, 'always'],
    'header-max-length': [2, 'always', 100],
    'ticket-empty': [2, 'never'],
    'ticket-case': [2, 'always', 'upper-case'],
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'scope-empty': [2, 'always'], // 항상 scope가 비어있어야 함을 강제합니다.
  },
  plugins: [
    {
      rules: {
        'header-match-team-pattern': (parsed) => {
          const { ticket, type, subject } = parsed;
          if (ticket && type && subject) {
            return [true];
          }
          return [
            false,
            'Commit message does not match the required format: PROJECT-123 feat: 새로운 로그인 기능 구현',
          ];
        },
        'ticket-empty': (parsed) => {
          const { ticket } = parsed;
          if (ticket && ticket.trim().length > 0) {
            return [true];
          }
          return [false, 'Ticket number must not be empty'];
        },
        'ticket-case': (parsed) => {
          const { ticket } = parsed;
          if (ticket && ticket === ticket.toUpperCase()) {
            return [true];
          }
          return [false, 'Ticket  must be in upper case'];
        },
      },
    },
  ],
};

export default config;
