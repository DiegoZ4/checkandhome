module.exports = {
  apps: [
    {
      name: 'checkandhome',
      script: 'npm',
      args: 'start',
      cwd: '/sites/chech/checkandhome',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3030,
        NEXT_PUBLIC_PORT: 3030
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3030,
        NEXT_PUBLIC_PORT: 3030
      },
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: '/var/log/pm2/checkandhome-error.log',
      out_file: '/var/log/pm2/checkandhome-out.log',
      log_file: '/var/log/pm2/checkandhome-combined.log',
      time: true,
      autorestart: true,
      restart_delay: 1000,
      max_restarts: 5,
      min_uptime: '10s'
    }
  ]
}