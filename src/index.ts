import {
	AnalyzeOptions,
	BuildOptions,
	BuildResultV3,
	Files,
	Lambda,
	PrepareCacheOptions,
	ShouldServeOptions,
	StartDevServerOptions,
	StartDevServerResult,
} from "@vercel/build-utils";

type BuildResult = BuildResultV3;

interface Runtime {
	version: number;
	build: (options: BuildOptions) => Promise<BuildResult>;
	// analyze?: (options: AnalyzeOptions) => Promise<string>;
	// prepareCache?: (options: PrepareCacheOptions) => Promise<Files>;
	// shouldServe?: (options: ShouldServeOptions) => Promise<boolean>;
	// startDevServer?: (
	// 	options: StartDevServerOptions,
	// ) => Promise<StartDevServerResult>;
}

export const version = 3;

export function build(options: BuildOptions): Promise<BuildResult> {
	console.log(options);

	const { entrypoint, files } = options;
	const entryFile = files[entrypoint];

	console.log(entrypoint, entryFile);

	return Promise.resolve({
		output: new Lambda({
			runtime: "provided.al2",
			environment: {},
			files: {},
			handler: "",
		}),
	});
}
