import {
    actionDataTypes,
    actionTypes,
    ActionTypesKeys,
} from "@site/docs/arc/data";

const ActionDataTable = ({ actionType }: { actionType: ActionTypesKeys }) => {
    const action = actionTypes[actionType];

    if (action.producesData.length === 0) {
        return <p>This action does not produce any action data.</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Action Data Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {action.producesData.map((data) => (
                    <tr key={data}>
                        <td>
                            <code>{data}</code>
                        </td>
                        <td>{actionDataTypes[data].description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ActionDataTable;
