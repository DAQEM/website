import useReward from "@site/src/hooks/use-reward";
import React from "react";

export default function RewardParameterTable() {
    const parameters = useReward().parameters;

    if (!parameters || parameters.length === 0) {
        return <p>This reward type does not have any parameters.</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {parameters.map((param) => (
                    <tr key={param.name}>
                        <td>
                            <code>{param.name}</code>
                        </td>
                        <td>
                            {param.types.map((t, index) => (
                                <React.Fragment key={index}>
                                    {t.typeURL ? (
                                        <a href={t.typeURL}>
                                            <code>{t.type}</code>
                                        </a>
                                    ) : (
                                        <code>{t.type}</code>
                                    )}
                                    {index < param.types.length - 1 && " | "}
                                </React.Fragment>
                            ))}
                        </td>
                        <td>
                            {param.required ? (
                                <>
                                    ✅<span className="sr-only">Required</span>
                                </>
                            ) : (
                                <>
                                    ❌<span className="sr-only">Optional</span>
                                </>
                            )}
                        </td>
                        <td>
                            {param.default !== undefined ? (
                                <code>{String(param.default)}</code>
                            ) : (
                                <>
                                    -
                                    <span className="sr-only">
                                        No default value
                                    </span>
                                </>
                            )}
                        </td>
                        <td>{param.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
