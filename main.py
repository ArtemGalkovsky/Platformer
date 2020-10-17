import eel


@eel.expose
def get_map_file(file_dir):
    with open(file_dir, "r") as fl:
        return fl.read().splitlines()


eel.init("web", js_result_timeout=1)
eel.start("index.html")
