import{ motion } from "framer-motion";
import minhaFoto from "../assets.foto.jpg";

export default function About(){
    return(
        <section id="sobre"
        className="py-20 px-6 max-w-5x1 mx-auto flex flex-col md:flex-row items-center gap-10">
            <motion.div>
                className="flex-shrink-0"
                initial={{opacit: 1, x: 0}}
                transition= {{ duration: 0.6}}

                <img 
                scr="{minhaFoto}"
                alt="Foto"
                className="w-48 h-48 md:w-64 object-cover rounded-full shado-lg border-4 border-orange-500"
                />
            </motion.div>

            {/* texto */}
            <motion.div>
                className="text-center md:text-left"
                initial={{opacity: 0, x: 0}}
                whileInView= {{ opacity: 1, x: 0}}
                transition= {{duration: 0.6, felay:0.2}}

                <h2 className="text-3x1 font-bold mb-6 text-orange-500">Sobre mim</h2>
                <p className="text-justify text-lg-text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus maiores rerum iste earum non voluptates, quas deserunt mollitia dolore unde numquam, architecto nihil. Dolor pariatur sapiente explicabo deleniti porro adipisci dolore molestiae iste? Quia iure nesciunt ab inventore aliquam! Cupiditate, reiciendis? Quia, impedit voluptatem reiciendis suscipit laboriosam soluta itaque veniam distinctio! Libero ea quod dolorum sit, totam tempore sed ab officiis praesentium soluta hic esse repellendus iure cumque delectus eveniet? Praesentium iste molestiae, sint magni similique qui eveniet enim non vitae a nisi aliquam quasi! Soluta, error cupiditate! Aut dolores in molestias aliquid neque sequi dolorum. Fuga libero voluptates unde dicta temporibus sapiente? Debitis fuga qui nam, distinctio cupiditate sapiente et, ipsam delectus, accusantium architecto ab excepturi! Illo qui praesentium veritatis fugit consectetur assumenda velit recusandae voluptatem, non doloremque voluptates nulla enim voluptas repellendus id voluptatum nesciunt, necessitatibus repellat consequatur reiciendis veniam? Reprehenderit ab corporis eius numquam obcaecati amet soluta repellat provident modi dignissimos neque praesentium, odio quae voluptatibus, magni itaque tempore dolorum velit quas minus inventore consequatur explicabo consectetur fugiat? Officiis sapiente dolorum inventore modi at veritatis dignissimos beatae nulla in mollitia, odio voluptate fuga magni reiciendis soluta repellat non esse illo tempora suscipit quas optio. Repellendus minus laboriosam optio? Nihil vitae fugit magni sit voluptatibus! Pariatur earum harum expedita nulla eveniet assumenda, mollitia quod aliquam excepturi rem voluptas hic sequi, voluptatem dolore molestias, sit consequatur? Optio dignissimos ex vero adipisci cumque iusto velit. Commodi libero dignissimos nostrum iure at dolorem consequuntur voluptatem nam accusantium deleniti ut porro placeat magnam similique, debitis dolores iste! Rerum cumque nostrum qui placeat repellendus mollitia saepe! Sapiente totam provident ex minima rerum incidunt unde molestiae, eaque, ipsa ullam nemo quas, sunt numquam exercitationem architecto officia perspiciatis. Deleniti repellat minus aspernatur optio veritatis sed et ex at tempora laborum. Iste totam dolorum accusamus optio quae, minus tenetur molestias? Sapiente architecto, ullam, eaque eligendi doloribus totam labore ipsa unde recusandae libero nostrum id, ex dolores iste suscipit aliquam error nisi! At, dolore eligendi harum soluta dolorem laborum. Reprehenderit tempora rerum non, ipsum soluta nulla sapiente? Minus nihil sed nesciunt, veritatis, dolore ex modi inventore voluptas quia quisquam assumenda asperiores unde ipsam omnis aspernatur blanditiis id officiis quibusdam distinctio voluptatem quas. Optio voluptatem, deserunt, exercitationem quod debitis dolorem sed accusantium nisi, excepturi maiores blanditiis dignissimos at? A quis fuga veritatis nihil explicabo dolorem, animi, ipsa, corporis quos eligendi dignissimos cumque! Dolores, quaerat. Earum itaque hic modi iusto inventore distinctio odit, doloremque facilis sit ducimus deleniti, nobis laborum facere eligendi maiores cupiditate repellat aliquid! Sunt natus asperiores vitae voluptas, reiciendis, aliquam nemo voluptate alias fuga dolore id aspernatur accusantium!

                </p>
                
            </motion.div>



        </section>
    )
}
