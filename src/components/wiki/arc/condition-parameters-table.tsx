import { conditionTypes, ConditionTypesKeys } from "@site/docs/arc/data";

const ConditionParametersTable = ({
    conditionType,
}: {
    conditionType: ConditionTypesKeys;
}) => {
    const condition = conditionTypes[conditionType];

    if (condition.parameters.length === 0) {
        return <p>This condition does not take any parameters.</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
                {condition.parameters.map((param, index) => (
                    <tr key={index}>
                        <td>
                            <code>{param.name}</code>
                        </td>
                        <td>
                            {param.types.map((type, typeIndex) => (
                                <span key={typeIndex}>
                                    {type.typeURL ? (
                                        <a href={type.typeURL}>
                                            <code>{type.type}</code>
                                        </a>
                                    ) : (
                                        <code>{type.type}</code>
                                    )}
                                    {typeIndex < param.types.length - 1 &&
                                        " | "}
                                </span>
                            ))}
                        </td>
                        <td>{param.required ? "Yes" : "No"}</td>
                        <td>
                            {param.default !== undefined ? (
                                <code>{param.default}</code>
                            ) : (
                                "-"
                            )}
                        </td>
                        <td>{param.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ConditionParametersTable;
