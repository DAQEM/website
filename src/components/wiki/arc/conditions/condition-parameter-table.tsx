import useCondition from "@site/src/hooks/use-condition";
import React from "react";

export default function ConditionParameterTable() {
    const parameters = useCondition().parameters;

    if (!parameters || parameters.length === 0) {
        return <p>This condition type does not have any parameters.</p>;
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
                                "-"
                            )}
                        </td>
                        <td>{param.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
