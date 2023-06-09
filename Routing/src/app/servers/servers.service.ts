export class ServersService {
    private servers = [
        { id: 1, name: 'Productionserver', status: 'offline' },
        { id: 2, name: 'Testserver', status: 'online' },
        { id: 3, name: 'Devserver', status: 'offline' },
    ];

    getServers() {
        return this.servers.slice();
    }
    getServer(id: number) {
        return this.servers.find(
            (s) => s.id === id
        );
    }
    updateServer(id: number, serverInfo: { name: string, status: string }) {
        const server = this.servers.find(
            (s) => s.id === id
        );
        if(server) {
            server.name = serverInfo.name;
            server.status = serverInfo.status;
        }
    }
}