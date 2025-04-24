<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import * as Tabs from "$lib/components/ui/tabs/index";
    import modularcodeSvg from "$lib/images/home/multilang/modularcode_color.svg";
    import modularcodeDarkSvg from "$lib/images/home/multilang/modularcode_mono.svg";
    import lowcodeSvg from "$lib/images/home/multilang/lowcode_color.svg";
    import lowcodedarkSvg from "$lib/images/home/multilang/lowcode_mono.svg";
    import proglangSvg from "$lib/images/home/multilang/programminglanguages_color.svg";
    import proglangDarkSvg from "$lib/images/home/multilang/programminglanguages_mono.svg";
    import { Copy, Globe } from "lucide-svelte";
    import { toast } from "svelte-sonner";

    let languages = [
        {
            name: "Python",
            code: `client = Client ()
client.connect()
query_result = client.query(collectionname='entities', query={})
print('result', query_result)
client.free()
print('result', query_result)
client.free()`,
        },
        {
            name: "NodeJS",
            code: `const { Client } = require('openiap');
const client = new Client();
client.connect();
const query_result = client.query({ 
    collectionname: 'entities', query: '{}', projection: '{"name":1}' 
});
console.log("result", query_result);
client.free();`,
        },
        {
            name: "Dotnet",
            code: `static async Task MainAsync(string[] args) {
    Client client = new Client();
    await client.connect();
    string results = await client.Query<string>("entities", "{}", "{\"name\": 1}");
    Console.WriteLine("result: " + results);    
}`,
        },
        {
            name: "Rust",
            code: `use openiap_client::{OpenIAPError, Client, QueryRequest};
async fn main() -> Result<(), OpenIAPError> {
    let client = Client::new_connect("").await?;
    let q = client.query( QueryRequest::with_projection(
        "entities",
        "{}",
        "{\"name\":1}"
    )).await?;
    let items: serde_json::Value = serde_json::from_str(&q.results).unwrap();
    let items: &Vec<serde_json::Value> = items.as_array().unwrap();
    for item in items {
        println!("Item: {:?}", item);
    }
    Ok(())
}
`,
        },
        {
            name: "C/C++",
            code: `
struct ClientWrapper *client = create_client();
const char *server_address = "";
struct ConnectResponseWrapper *conn_resp = client_connect(client, server_address);
free_connect_response(conn_resp);
QueryRequestWrapper req;
req.collectionname = "entities";
req.query = "{}";
struct QueryResponseWrapper *query_resp = query(client, &req);
printf("Query succeeded. Results: %s\n", query_resp->results);
free_query_response(query_resp);
client_disconnect(client);
free_client(client);`,
        },
        {
            name: "Php",
            code: `use openiap\Client;
$client = new Client();
$client->connect("");
$entities = $client->Query("entities", []);
print_r("Query returned: " . count($entities) . PHP_EOL);
$client->free();
unset($client);`,
        },
        {
            name: "Java",
            code: `client = new Client();
List<clienttestcli.Entity> results = 
client.query(new TypeReference<List<clienttestcli.Entity>>() {}.getType(),
new QueryParameters.Builder().collectionname("entities")
    .query("{\"_type\":\"test\"}").top(10).build());
for (clienttestcli.Entity item : results) {
    System.out.println("Item: " + item._type + " " + item._id + " " + item.name);
}`,
        },
    ];
    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
    let carouselItem = [
        {
            title: "Modular Code, Maximum Flexibility",
            description:
                "Break code into small, independent modules for easier maintenance, better testability, and seamless scalability.",
            image: modularcodeSvg,
            imageDark: modularcodeDarkSvg,
        },
        {
            title: "Programing Languages",
            description:
                " A unified SDK delivering the same seamless experience across 10 different programming languages.",
            image: proglangSvg,
            imageDark: proglangDarkSvg,
        },
        {
            title: "Low-Code, High Impact",
            description:
                "Empower non-technical users to prototype and build functional solutions with ease, using their low-code tool of choice.",
            image: lowcodeSvg,
            imageDark: lowcodedarkSvg,
        },
    ];
    function renderTopSmall(index: number) {
        return " justify-center items-center";
    }
    function renderTopLarge(index: number) {
        return " items-center justify-center";
    }
</script>

<div
    class="mx-6 mb-10 md:mx-10 lg:mx-20 xl:mx-32 xl:mb-24 xl:flex xl:justify-center"
>
    <Carousel.Root
        opts={{
            align: "start",
        }}
        class="lg:max-w-[1700px]"
    >
        <div class="mb-10">
            <div class="flex items-end justify-between gap-8">
                <p class={"text-[50px] font-semibold" + gradienttext}>
                    Multi-language support
                </p>
                <div
                    class="block flex space-x-5 items-center lg:pe-10 hidden md:block"
                >
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 text-[14px]">
                OpenCore allows different types of developers to work together
                in one common framework
            </p>
        </div>
        <Carousel.Content class="gap-5">
            <Carousel.Item class="lg:basis-3/5">
                <div
                    class="border rounded-[20px] border-bw500/70 h-[380px] xl:h-[450px] overflow-hidden grayscale-0 group"
                >
                    <div
                        class="pt-8 px-8 pb-2 xl:pt-10 xl:px-10 xl:pb-8 mb-2 md:mb-4"
                    >
                        <p class="text-xl font-medium mb-2 text-bw50">
                            Choose your favourite coding language
                        </p>
                        <p class="text-sm">
                            Leverage OpenRPA and Node-RED to build efficient,
                            low-code automation solutions for RPA and API
                            integrations—streamlining workflows with minimal
                            coding effort.
                        </p>
                    </div>
                    <div
                        class="ms-4 sm:ms-8 md:ms-10 lg:ms-8 xl:ms-12 h-[387px] border rounded-[20px] border-bw500/70 w-full"
                    >
                        <div
                            class="py-1 px-2.5 border-b-2 border-bw500/70 w-full"
                        >
                            <Globe class="h-4 w-4" />
                        </div>
                        <div
                            class="m-3 pt-3 rounded-[5px] dark:bg-[#1D1F22] h-full"
                        >
                            <Tabs.Root value="1" class="ms-5 mt-2">
                                <div></div>
                                <Tabs.List
                                    class="h-fit md:block w-full w-fit bg-bw200 dark:bg-darkagenttab rounded-[5px] p-1 mb-2 lg:mb-0 text-bw50 font-normal"
                                >
                                    {#each languages as language, index}
                                        <Tabs.Trigger
                                            value={`${index + 1}`}
                                            class=" text-xs sm:text-base"
                                            >{language.name}</Tabs.Trigger
                                        >
                                    {/each}
                                </Tabs.List>
                                <div>
                                    {#each languages as language, index}
                                        <Tabs.Content value={`${index + 1}`}>
                                            <div
                                                class="text-bw300 flex justify-between text-xs sm:text-sm pt-2"
                                            >
                                                <pre class="w-72">
{language.code.trim()}
 </pre>
                                                <div
                                                    class="w-full flex justify-center"
                                                >
                                                    <HotkeyButton
                                                        onclick={() => {
                                                            navigator.clipboard.writeText(
                                                                language.code,
                                                            );
                                                            toast.success(
                                                                "Code copied to clipboard",
                                                            );
                                                        }}
                                                        aria-label="Copy code"
                                                        variant="icon"
                                                        size="icon"
                                                    >
                                                        <Copy />
                                                    </HotkeyButton>
                                                </div>
                                            </div>
                                        </Tabs.Content>
                                    {/each}
                                </div>
                            </Tabs.Root>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            {#each carouselItem as item, index}
                <Carousel.Item class={"md:basis-1/2 lg:basis-1/3"}>
                    <div
                        class="border rounded-[20px] border-bw500/70 h-[380px] xl:h-[450px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-8 xl:p-10 pb-0 xl:pb-2 mb-4 lg:mb-0">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                {item.title}
                            </p>
                            <p class="text-sm">
                                {item.description}
                            </p>
                        </div>
                        <div class="lg:hidden">
                            <div
                                class={"w-full overflow-hidden flex group-hover:hidden inline-flex " +
                                    renderTopSmall(index)}
                            >
                                <img src={item.imageDark} alt="imagedark" />
                            </div>
                            <div
                                class={"w-full overflow-hidden flex group-hover:group-hover:inline-flex hidden " +
                                    renderTopSmall(index)}
                            >
                                <img src={item.image} alt="imagelight" />
                            </div>
                        </div>
                        <div class="hidden lg:block">
                            <div
                                class={"w-full overflow-hidden flex group-hover:hidden inline-flex " +
                                    renderTopLarge(index)}
                            >
                                <img
                                    src={item.imageDark}
                                    alt="imagedark"
                                    class="h-1/2"
                                />
                            </div>
                            <div
                                class={"w-full overflow-hidden flex group-hover:group-hover:inline-flex hidden " +
                                    renderTopLarge(index)}
                            >
                                <img src={item.image} alt="imagelight" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            {/each}
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1"></div>
            </Carousel.Item>
        </Carousel.Content>
        <div
            class="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-36
   bg-gradient-to-l from-[rgba(13,13,17,0.5)] to-transparent z-10"
        ></div>
    </Carousel.Root>
</div>
