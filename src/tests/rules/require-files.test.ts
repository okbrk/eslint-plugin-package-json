import { rules } from "../../rules/require-properties.js";
import { ruleTester } from "./ruleTester.js";

ruleTester.run("require-files", rules["require-files"], {
	invalid: [
		{
			code: "{}",
			errors: [
				{
					data: { property: "files" },
					line: 1,
					messageId: "missing",
				},
			],
		},
		{
			code: `{
            "name": "foo"
            }
            `,
			errors: [
				{
					data: { property: "files" },
					line: 1,
					messageId: "missing",
				},
			],
		},
		{
			code: `{
            "name": "foo",
            "author": "Jessica Moss",
            "bin": {
                "files": ["lib"]
            }
            }
            `,
			errors: [
				{
					data: { property: "files" },
					line: 1,
					messageId: "missing",
				},
			],
		},
	],
	valid: [`{ "files": ["lib"] }`],
});
