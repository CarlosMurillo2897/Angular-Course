export class ServersService {
    private servers = [
        { name: 'Productionserver' },
        { name: 'Testserver' },
        { name: 'Devserver' },
    ];

    getServers() {
        return this.servers.slice();
    }
}