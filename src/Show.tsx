function Show({ data = [] }) {
    return (
        <div>
                <table  >
                    <tr>
                        <th>Id</th>
                        <th>Ten</th>
                        <th>DiaChi</th>
                        <th>Tuoi</th>
                    </tr>
            {data.map((info: any) => (
                    <tr key={info.id}>
                        <td>{info.name}</td>
                        <td>{info.Address}</td>
                        <td>{info.Age}</td>
                    </tr>
))}
</table>
        </div>
    );
}

export default Show;