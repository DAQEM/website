import { Star } from "@/pages";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "../ui/dialog";

export default function BisectHostingDialog({}) {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="secondary" size="sm">
                        Learn More
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader className="md:h-24 md:flex-row gap-4 justify-center items-center">
                        <p className="font-bold text-4xl pt-3">
                            Partnered with
                        </p>
                        <img
                            src="/img/partner/bisecthosting.svg"
                            alt="BisectHosting"
                            className="h-16 md:mt-4"
                        />
                    </DialogHeader>
                    <hr className="my-4 bg-card-background-light h-[2px]" />
                    <p>
                        We have partnered with BisectHosting to provide you with
                        the best server hosting experience. Whether you're
                        looking for reliable Minecraft server hosting or
                        powerful game server solutions, BisectHosting has you
                        covered with the newest server hardware and support for
                        over 100 different games. With BisectOne, you will be
                        able to switch between different games in just seconds.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="mc-card-reversed p-4 m-1 h-64 flex flex-col justify-center">
                            <h3 className="font-bold text-xl mb-2">
                                Why BisectHosting?
                            </h3>
                            <ul className="flex flex-col gap-1 md:gap-2 list-none p-0 text-lg font-semibold m-0">
                                <li className="flex gap-2 items-center">
                                    <Star />
                                    <span>24/7 Support from Experts</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Star />
                                    <span>Instant Server Setup</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Star />
                                    <span>High Performance hardware</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Star />
                                    <span>Global Locations</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-evenly items-center mc-card-reversed p-4 m-1 h-64">
                            <h3 className="font-bold text-xl mb-2">
                                Your Discount Code
                            </h3>
                            <Button
                                variant="default"
                                size="lg"
                                className="w-32 text-2xl"
                                asChild
                            >
                                <a
                                    href="https://bisecthosting.com/DAQEM?ref=Modal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    DAQEM
                                </a>
                            </Button>
                            <p className="m-0 text-slate-400 text-center">
                                Use this code at checkout to receive 25% OFF on
                                your first order!
                            </p>
                        </div>
                    </div>
                    <p className="text-slate-400 mb-4">
                        By using this code, you not only get a great deal but
                        also directly support DAQEM Studios, allowing us to keep
                        creating awesome mods and projects for you!
                    </p>
                    <DialogFooter>
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full"
                            asChild
                        >
                            <a
                                href="https://bisecthosting.com/DAQEM?ref=Modal"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get Discount
                            </a>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}
