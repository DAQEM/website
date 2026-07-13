import {
    BundledLanguage,
    CodeBlockBody,
    CodeBlockContent,
    CodeBlockCopyButton,
    CodeBlockFilename,
    CodeBlockFiles,
    CodeBlockHeader,
    CodeBlockItem,
    CodeBlock as CodeBlockRoot,
} from "../kibo-ui/code-block";

type CodeBlockProps = {
    language: BundledLanguage;
    filename: string;
    code: string;
};

const CodeBlock = ({ language, filename, code }: CodeBlockProps) => {
    return (
        <CodeBlockRoot
            data={[
                {
                    language,
                    filename,
                    code,
                },
            ]}
            defaultValue={language}
        >
            <CodeBlockHeader>
                <CodeBlockFiles>
                    {(item) => (
                        <CodeBlockFilename
                            key={item.language}
                            value={item.language}
                        >
                            {item.filename}
                        </CodeBlockFilename>
                    )}
                </CodeBlockFiles>
                <CodeBlockCopyButton />
            </CodeBlockHeader>
            <CodeBlockBody>
                {(item) => (
                    <CodeBlockItem key={item.language} value={item.language}>
                        <CodeBlockContent
                            language={item.language as BundledLanguage}
                        >
                            {item.code}
                        </CodeBlockContent>
                    </CodeBlockItem>
                )}
            </CodeBlockBody>
        </CodeBlockRoot>
    );
};

export default CodeBlock;
