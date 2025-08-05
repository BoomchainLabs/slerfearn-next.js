# $LERF Rewards Hub by Boomchainlab

A cutting-edge Web3 reward platform that transforms blockchain interactions into an engaging, gamified ecosystem powered by $LERF tokens.

## Features

- 🎮 **Gamified Rewards System**: Complete daily missions and weekly quests to earn $LERF tokens
- 💰 **Multi-Chain Staking**: Stake your $LERF tokens across multiple chains for passive income
- 🎯 **Micro-Tasks with Rewards**: Automated micro-tasks with a 5-minute cooldown faucet
- 🤖 **On-Chain Activity Farming**: Bots and tools for maximizing on-chain activity rewards
- 🔄 **Auto-Staking Contracts**: Smart contracts that automatically reinvest earnings
- 🌈 **Cross-Chain Liquidity**: Add and manage liquidity across Ethereum, Solana, and more
- 🦊 **Multi-Wallet Support**: Connect any wallet from MetaMask to Phantom with connection rewards
- 🤝 **GitHub Integration**: Connect your GitHub account to earn additional $LERF tokens
- 📊 **Professional Trading Interface**: Advanced charting, swap, and trading tools

## Tech Stack

- **Frontend**: React.js, Vite, TailwindCSS, shadcn/ui
- **Backend**: Node.js, Express
- **Database**: PostgreSQL with Drizzle ORM
- **Web3**: ethers.js, WalletConnect
- **Authentication**: Replit Auth

## Key Components

### Dashboard

Professional multi-million dollar dashboard interface showing platform statistics, user rewards, and ecosystem metrics.

### Multi-Wallet Connect

Seamless integration with multiple wallet providers across different blockchains, with token rewards for connecting.

### Token Trading Chart

Professional trading interface with price charts, order books, and swap functionality for $LERF tokens.

### Cross-Chain Liquidity

Add and manage liquidity for $LERF tokens across multiple blockchains including Ethereum, Solana, BSC, and Arbitrum.

### GitHub Connect

Connect your GitHub account to earn $LERF token rewards for open source contributions.

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database

### Installation

```bash
# Clone the repository
git clone https://github.com/Boomchainlab/lerf-rewards-hub.git
cd lerf-rewards-hub

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Set up the database
npm run db:push

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/lerf_rewards_hub

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret_key

# Web3 Configuration
WALLET_CONNECT_PROJECT_ID=your_walletconnect_project_id
INFURA_PROJECT_ID=your_infura_project_id

# GitHub OAuth (for GitHub integration)
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_client_secret

# Token Contract Addresses
LERF_TOKEN_CONTRACT_ETH=0x...
LERF_TOKEN_CONTRACT_SOLANA=...
LERF_TOKEN_CONTRACT_BSC=0x...

# API Keys
COINGECKO_API_KEY=your_coingecko_api_key
MORALIS_API_KEY=your_moralis_api_key
```

## Deployment

### Vercel Deployment

1. Push your code to GitHub
1. Connect your repository to Vercel
1. Add environment variables in Vercel dashboard
1. Deploy automatically

```bash
npm run build
vercel --prod
```

### Railway Deployment

1. Connect your GitHub repository to Railway
1. Add PostgreSQL service
1. Configure environment variables
1. Deploy both frontend and backend services

### Docker Deployment

```bash
# Build the Docker image
docker build -t lerf-rewards-hub .

# Run with environment variables
docker run -p 3000:3000 --env-file .env lerf-rewards-hub
```

## API Documentation

### Authentication Endpoints

- `POST /api/auth/signin` - Sign in with wallet
- `POST /api/auth/signout` - Sign out user
- `GET /api/auth/session` - Get current session

### Rewards Endpoints

- `GET /api/rewards/balance` - Get user’s $LERF token balance
- `POST /api/rewards/claim` - Claim daily/weekly rewards
- `GET /api/rewards/missions` - Get available missions
- `POST /api/rewards/complete-mission` - Complete a mission

### Staking Endpoints

- `POST /api/staking/stake` - Stake tokens
- `POST /api/staking/unstake` - Unstake tokens
- `GET /api/staking/pools` - Get available staking pools
- `GET /api/staking/user-stakes` - Get user’s staking positions

### Trading Endpoints

- `GET /api/trading/price` - Get current $LERF token price
- `GET /api/trading/chart` - Get price chart data
- `POST /api/trading/swap` - Execute token swap
- `GET /api/trading/orderbook` - Get order book data

## Smart Contracts

### $LERF Token Contract

- **Ethereum**: `0x...` (Replace with actual contract address)
- **Solana**: `...` (Replace with actual program ID)
- **BSC**: `0x...` (Replace with actual contract address)
- **Arbitrum**: `0x...` (Replace with actual contract address)

### Staking Contracts

- **Auto-Staking Pool**: `0x...`
- **Multi-Chain Bridge**: `0x...`
- **Rewards Distributor**: `0x...`

## Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### Development Workflow

1. Fork the repository
1. Create a feature branch: `git checkout -b feature/your-feature`
1. Make your changes and commit: `git commit -m 'Add your feature'`
1. Push to the branch: `git push origin feature/your-feature`
1. Submit a pull request

### Code Style

- Use ESLint and Prettier for code formatting
- Follow React best practices
- Write unit tests for new features
- Document your code with JSDoc comments

## Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run end-to-end tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## Security

- All smart contract interactions are audited
- User funds are secured through multi-signature wallets
- Regular security assessments and penetration testing
- Bug bounty program available

For security issues, please email: security@boomchainlab.com

## Roadmap

### Q1 2024

- [ ] Launch mainnet version
- [ ] Add more staking pools
- [ ] Implement cross-chain bridges
- [ ] Mobile app development

### Q2 2024

- [ ] NFT rewards integration
- [ ] DAO governance features
- [ ] Advanced trading tools
- [ ] Institutional features

### Q3 2024

- [ ] Layer 2 integration
- [ ] DeFi protocol partnerships
- [ ] Advanced analytics dashboard
- [ ] API marketplace

## Community

- **Discord**: [Join our Discord](https://discord.gg/boomchainlab)
- **Twitter**: [@BoomchainLab](https://twitter.com/BoomchainLab)
- **Telegram**: [LERF Community](https://t.me/lerfcommunity)
- **GitHub**: [Boomchainlab](https://github.com/Boomchainlab)

## License

MIT © [Boomchainlab](https://github.com/Boomchainlab)

-----

**Disclaimer**: This project involves cryptocurrency and DeFi protocols. Please do your own research and understand the risks before participating. Never invest more than you can afford to lose.