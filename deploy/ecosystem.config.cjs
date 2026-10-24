module.exports = {
  apps: [{
    name: "karyalokal",
    cwd: "/var/www/karyalokal",
    script: "npm",
    args: "start",
    env: { NODE_ENV: "production", PORT: 3000 },
    max_memory_restart: "400M",
  }],
};
